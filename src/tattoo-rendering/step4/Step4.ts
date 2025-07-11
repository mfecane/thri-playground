import {
	WebGLRenderer,
	Scene,
	Texture,
	Mesh,
	PerspectiveCamera,
	TextureLoader,
	DirectionalLight,
	AmbientLight,
	Group,
	SRGBColorSpace,
	LinearSRGBColorSpace,
	MeshPhysicalMaterial,
	Color,
	Vector2,
	PCFShadowMap,
	MeshDepthMaterial,
	DoubleSide,
	RGBADepthPacking,
	NoBlending,
	WebGLRenderTarget,
	ShaderMaterial,
	NormalBlending,
	AdditiveBlending,
	Material,
	Matrix3,
	RGBAFormat,
	CameraHelper,
	BoxGeometry,
	MeshStandardMaterial,
	AxesHelper,
	PlaneGeometry,
	Vector3,
	BackSide,
	FrontSide,
	MeshBasicMaterial,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { Renderer } from '@/common/Renderer'
import * as dat from 'dat.gui'
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js'
import { Stats } from '@/common/Stats'
import {  renderersReposditory } from '@/common/RendererList'
import { dumpShaderProgram } from '@/common/ThreeUtils'

import depthVert from '@/tattoo-rendering/step4/shaders/depth_and_alpha_display.vert.glsl'
import depthFrag from '@/tattoo-rendering/step4/shaders/depth_and_alpha_display.frag.glsl'

import depthAndAlphaVertSource from '@/tattoo-rendering/step4/shaders/alpha_and_depth.vert.glsl'
import depthAndAlphaFragSource from '@/tattoo-rendering/step4/shaders/alpha_and_depth.frag.glsl'

import smokeVert from '@/tattoo-rendering/step4/shaders/smoke_vert.glsl'
import smokeFrag from '@/tattoo-rendering/step4/shaders/smoke_frag.glsl'
import { callOnceDelayed } from '@/common/lib'

/**
 * Shader for rendering depth and alpha into a texture
 * depth is packed to rgb, and alpha channel
 */
const DepthAndAlphaShader = {
	name: 'DepthAndAlphaShader',

	uniforms: {
		map: { value: null },
		mapTransform: { value: new Matrix3() },
	},

	vertexShader: depthAndAlphaVertSource,

	fragmentShader: depthAndAlphaFragSource,
}

/**
 * Shader for rendering depth+alpha texture, where depth is packed to RGB channel, alpha is A channel
 */
const DepthAndAlphaDisplayShader = {
	name: 'DepthAndAlphaDisplayShader',

	uniforms: {
		tDepth: { value: null },
		cameraNearFar: { value: new Vector2(0.5, 0.5) },
		scale: { value: 1.0 },
	},

	vertexShader: depthVert,

	fragmentShader: depthFrag,
}

const SmokeShader = {
	name: 'SmokeShader',

	defines: {
		DEPTH_PACKING: 1,
		PERSPECTIVE_CAMERA: 1,
		USE_SHADOWMAP: 1,
	},

	uniforms: {
		colorTexture: { value: null },
		tDepth: { value: null },
		cameraNearFar: { value: new Vector2(0.5, 0.5) },
		textureMatrix: { value: null },
		resolution: { value: null },
		cameraWorldMatrix: { value: null },
		cameraProjectionMatrixInverse: { value: null },
		cameraPosition: { value: null },
		time: { value: 0 },
		texture3d: { value: null },
		lightPosition: { value: null },
		density2: { value: null },

		// light
		shadowMap: { value: null },
		directionalShadowMatrix: { value: null },
		scale2: { value: 0.0 },
		scale3: { value: 0.0 },
	},

	vertexShader: smokeVert,

	fragmentShader: smokeFrag,
}

export class Step4 implements Renderer {
	/**
	 * CONSTANTS
	 */

	private COLD_COLOR = new Color(0xc7e3f2)

	public renderer: WebGLRenderer

	//@ts-expect-error
	private orbitControls: OrbitControls

	private textureLoader = new TextureLoader()

	//@ts-expect-error
	private camera: PerspectiveCamera

	private animId: number = -1

	private scene = new Scene()

	/**
	 * For fog effects
	 */
	private readonly downSampling = 2

	/**
	 * Material for simulating writing depth buffer to a texture
	 */
	private depthBuffer: WebGLRenderTarget

	/**
	 * Smoke buffer
	 */
	private smokeBuffer: WebGLRenderTarget

	/**
	 * Smoke buffer
	 */
	private sceneBuffer: WebGLRenderTarget

	private width = window.innerWidth

	private height = window.innerHeight

	private fsQuad = new FullScreenQuad()

	private stats = new Stats()

	//@ts-expect-error
	private colorMap: Texture

	private gui: dat.GUI

	public scale = 1.0

	/**
	 * Material for unpacking and rendering depth buffer
	 *
	 * @note do not set depthPacking for this material!
	 */
	private depthDispayMaterial = new ShaderMaterial({
		defines: {
			PERSPECTIVE_CAMERA: 1,
		},

		uniforms: DepthAndAlphaDisplayShader.uniforms,
		vertexShader: DepthAndAlphaDisplayShader.vertexShader,
		fragmentShader: DepthAndAlphaDisplayShader.fragmentShader,

		// These goes only in pair
		transparent: true,
		blending: NormalBlending,

		depthTest: false,
		depthWrite: false,
	})

	private depthAndAlphaMaterial = new ShaderMaterial({
		defines: {
			PERSPECTIVE_CAMERA: 1,
			DEPTH_PACKING: 3202,
		},

		uniforms: DepthAndAlphaShader.uniforms,
		vertexShader: DepthAndAlphaShader.vertexShader,
		fragmentShader: DepthAndAlphaShader.fragmentShader,

		// These goes only in pair
		transparent: true,
		blending: NoBlending,

		depthTest: true,
		depthWrite: true,
	})

	private smokeMaterial = new ShaderMaterial({
		defines: Object.assign({}, SmokeShader.defines),

		uniforms: SmokeShader.uniforms,
		vertexShader: SmokeShader.vertexShader,
		fragmentShader: SmokeShader.fragmentShader,

		blending: NoBlending,
		depthTest: false,
		depthWrite: false,
	})

	private composeMaterial = new ShaderMaterial({
		uniforms: {
			smokeBuffer: { value: null },
			readBuffer: { value: null },
		},

		vertexShader: `varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,

		fragmentShader: `varying vec2 vUv;

		uniform sampler2D smokeBuffer;
		uniform sampler2D readBuffer;

		void main() {
			vec4 smoke = texture2D(smokeBuffer, vUv);
			vec4 scene = texture2D(readBuffer, vUv);
			// gl_FragColor.rgb = mix(texture2D(readBuffer, vUv).rgb, smoke.rgb, smoke.a);
			gl_FragColor.rgb = scene.rgb + smoke.rgb;
			// gl_FragColor.rgb = scene.rgb;
			gl_FragColor.a = scene.a;
		}`,

		blending: NormalBlending,
		transparent: true,

		depthTest: false,
		depthWrite: false,
	})

	//@ts-expect-error
	private mesh: Mesh

	//@ts-expect-error
	private backsideMesh: Mesh

	//@ts-expect-error
	private light: DirectionalLight

	private startTime = 0

	// smoke parameters
	public scale2 = 4.0

	public scale3 = 1.0

	public density = 0.4

	private physicalMaterial = new MeshPhysicalMaterial({
		side: FrontSide,
		depthTest: true,
		transparent: true,
		sheen: 0.1,
		sheenRoughness: 0.2,
		sheenColor: new Color(0xffffff),
	})

	private backsideMaterial = new MeshBasicMaterial({
		colorWrite: false,
		// color: 0xffffff,
		depthWrite: true,
		side: BackSide,
	})

	public constructor() {
		this.renderer = new WebGLRenderer({ antialias: true, premultipliedAlpha: false })
		this.renderer.autoClear = false
		this.renderer.shadowMap.enabled = true
		this.renderer.shadowMap.type = PCFShadowMap

		this.depthBuffer = new WebGLRenderTarget(this.width / this.downSampling, this.height / this.downSampling, {
			format: RGBAFormat,
			generateMipmaps: false,
		})
		this.depthBuffer.texture.name = 'Depth'
		this.depthBuffer.texture.generateMipmaps = false
		this.depthBuffer.texture.premultiplyAlpha = false

		// TODO resize
		this.smokeBuffer = new WebGLRenderTarget(this.width / this.downSampling, this.height / this.downSampling)
		this.smokeBuffer.texture.name = 'Smoke Buffer'
		this.smokeBuffer.texture.generateMipmaps = false
		this.smokeBuffer.texture.premultiplyAlpha = false

		// TODO resize
		this.sceneBuffer = new WebGLRenderTarget(this.width, this.height)
		this.sceneBuffer.texture.name = 'Scene Buffer'
		this.sceneBuffer.texture.generateMipmaps = false
		this.sceneBuffer.texture.premultiplyAlpha = false

		document.body.appendChild(this.stats.container)

		this.gui = new dat.GUI()
		this.gui.add(this, 'scale', 0.0, 10.0)
		this.gui.add(this, 'scale2', 0.0, 10.0)
		this.gui.add(this, 'scale3', 0.0, 1.0)
		this.gui.add(this, 'density', 0.0, 0.5)

		//@ts-expect-error
		window.renderer = this.renderer
	}

	// private gui: dat.GUI

	public async init() {
		this.renderer.setSize(this.width, this.height)

		document.body.appendChild(this.renderer.domElement)

		this.camera = new PerspectiveCamera(45, this.width / this.height, 0.1, 1000.0)

		this.camera.position.set(2, 0, 2)

		// lighting

		const lightGroup = new Group()

		this.scene.add(new AmbientLight(0xffffff, 0.2))

		this.light = new DirectionalLight(this.COLD_COLOR, 2)

		this.light.position.set(3, 2, 3)

		this.light.castShadow = true
		this.light.shadow.camera.top = 1.0
		this.light.shadow.camera.bottom = -1.0
		this.light.shadow.camera.left = -1.0
		this.light.shadow.camera.right = 1.0
		this.light.shadow.camera.near = 0.01
		this.light.shadow.camera.far = 5.0

		// callOnceDelayed(() => {
		// 	const ch = new CameraHelper(this.light.shadow.camera)
		// 	this.scene.add(ch)
		// })

		lightGroup.add(this.light)

		this.scene.add(lightGroup)

		this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

		const loader = new FBXLoader()

		const textureLoader = new TextureLoader()

		this.mesh = await new Promise<Mesh>((resolve) => {
			loader.load('assets/models/arm/arm.fbx', (loaded) => resolve(loaded.children[0] as Mesh))
		})

		this.mesh.scale.set(0.08, 0.08, 0.08)
		this.mesh.castShadow = true
		this.mesh.receiveShadow = true

		// const cube = new Mesh(new BoxGeometry(0.5, 0.5, 0.5), new MeshStandardMaterial({ color: 0xffffff }))
		// cube.castShadow = true
		// cube.receiveShadow = true
		// this.scene.add(cube)

		// const plane = new Mesh(new PlaneGeometry(6, 6), new MeshStandardMaterial({ color: 0xcccccc }))
		// plane.rotateOnAxis(new Vector3(1, 0, 0), -Math.PI / 2)
		// plane.position.set(0, -0.5, 0)
		// plane.receiveShadow = true
		// this.scene.add(plane)

		// const ah = new AxesHelper()
		// this.scene.add(ah)

		this.colorMap = await new Promise<Texture>((resolve) => {
			textureLoader.load('assets/models/arm/diffuse.png', (loaded) => resolve(loaded))
		})

		this.colorMap.colorSpace = SRGBColorSpace

		const armOccMetRoughTexture = await new Promise<Texture>((resolve) => {
			textureLoader.load('assets/models/arm/arm_OccMetRough.png', (loaded) => resolve(loaded))
		})

		armOccMetRoughTexture.colorSpace = LinearSRGBColorSpace

		const armNormalTexture = await new Promise<Texture>((resolve) => {
			textureLoader.load('assets/models/arm/arm_Normal.png', (loaded) => resolve(loaded))
		})

		armNormalTexture.colorSpace = LinearSRGBColorSpace

		this.physicalMaterial.map = this.colorMap
		this.physicalMaterial.normalMap = armNormalTexture
		this.physicalMaterial.roughnessMap = armOccMetRoughTexture
		this.physicalMaterial.metalnessMap = armOccMetRoughTexture

		this.mesh.material = this.physicalMaterial
		this.mesh.renderOrder = 2

		this.backsideMesh = this.mesh.clone()
		this.backsideMesh.renderOrder = 1
		this.backsideMesh.material = this.backsideMaterial
		this.backsideMesh.castShadow = false
		this.backsideMesh.receiveShadow= false

		this.depthAndAlphaMaterial.uniforms.map.value = this.colorMap

		this.scene.add(this.mesh)

		this.scene.add(this.backsideMesh)

		this.smokeMaterial.uniforms.cameraNearFar.value.set(this.camera.near, this.camera.far)
		this.smokeMaterial.uniforms.resolution.value = new Vector2(
			this.width / this.downSampling,
			this.height / this.downSampling
		)
		this.smokeMaterial.uniforms.cameraWorldMatrix.value = this.camera.matrixWorld
		this.smokeMaterial.uniforms.cameraProjectionMatrixInverse.value = this.camera.projectionMatrixInverse.clone()

		const texture3d = await new Promise<Texture>((resolve) =>
			this.textureLoader.load('assets/textures/3d-noise.png', (texture) => {
				texture.colorSpace = LinearSRGBColorSpace
				resolve(texture)
			})
		)
		this.smokeMaterial.uniforms['texture3d'].value = texture3d

		this.startTime = Date.now()

		// some debug
		// window.setTimeout(() => {
		// 	dumpShaderProgram(this.renderer, this.depthAndAlphaMaterial)
		// }, 2000)
	}

	public async animate() {
		this.stats.begin()

		// move light
		// let time = performance.now() * 0.002
		// this.light.position.x = Math.sin(time * 0.1) * 2.0
		// this.light.position.y = 0.66
		// this.light.position.z = Math.cos(time * 0.1) * 2.0

		// render scene
		this.renderer.setRenderTarget(this.sceneBuffer)
		this.scene.background = new Color(0x000000)
		this.renderer.render(this.scene, this.camera)
		this.scene.background = null

		// render depth pass
		this.renderer.setRenderTarget(this.depthBuffer)
		this.scene.overrideMaterial = this.depthAndAlphaMaterial
		this.renderer.setClearColor(0xffffff)
		this.renderer.setClearAlpha(0.0)
		this.renderer.clear()
		this.renderer.render(this.scene, this.camera)
		this.scene.overrideMaterial = null
		this.scene.background = null

		// // test depth rendering
		// this.fsQuad.material = this.depthDispayMaterial
		// this.depthDispayMaterial.uniforms.cameraNearFar.value.set(this.camera.near, this.camera.far)
		// this.depthDispayMaterial.uniforms.tDepth.value = this.depthBuffer.texture
		// this.depthDispayMaterial.uniforms.scale.value = this.scale
		// this.renderer.setRenderTarget(null)
		// this.fsQuad.render(this.renderer)

		// render smoke

		this.camera.updateMatrix()
		this.camera.updateMatrixWorld()

		this.smokeMaterial.uniforms.tDepth.value = this.depthBuffer.texture
		this.smokeMaterial.uniforms.cameraPosition.value = this.camera.position
		this.smokeMaterial.uniforms.time.value = (Date.now() - this.startTime) / 4000

		this.light.shadow.camera.updateProjectionMatrix()
		this.smokeMaterial.uniforms.shadowMap.value = this.light.shadow.map!.texture
		this.smokeMaterial.uniforms.directionalShadowMatrix.value = this.light.shadow.matrix

		this.smokeMaterial.uniforms.lightPosition.value = this.light.position.normalize()

		this.smokeMaterial.uniforms.scale2.value = this.scale2
		this.smokeMaterial.uniforms.scale3.value = this.scale3
		this.smokeMaterial.uniforms.density2.value = this.density

		this.fsQuad.material = this.smokeMaterial
		this.renderer.setRenderTarget(this.smokeBuffer)
		this.renderer.setClearColor(0x000000)
		this.renderer.setClearAlpha(1.0)
		this.renderer.clear()
		this.fsQuad.render(this.renderer)

		// compose and render to screen

		this.fsQuad.material = this.composeMaterial
		this.composeMaterial.uniforms.readBuffer.value = this.sceneBuffer.texture
		this.composeMaterial.uniforms.smokeBuffer.value = this.smokeBuffer.texture
		this.renderer.setRenderTarget(null)
		this.renderer.setClearColor(0xffffff)
		this.renderer.setClearAlpha(1.0)
		this.renderer.clear()
		this.fsQuad.render(this.renderer)

		this.orbitControls.update()

		this.animId = requestAnimationFrame(async () => await this.animate())

		this.stats.end()
	}

	public async onResize(width: number, height: number) {
		this.width = width
		this.height = height

		this.depthBuffer.setSize(this.width / this.downSampling, this.height / this.downSampling)
		this.smokeBuffer.setSize(this.width / this.downSampling, this.height / this.downSampling)
		this.sceneBuffer.setSize(this.width, this.height)

		this.renderer.setSize(this.width, this.height)

		this.camera.aspect = this.width / this.height
		this.camera.updateProjectionMatrix()

		this.smokeMaterial.uniforms.resolution.value = new Vector2(
			this.width / this.downSampling,
			this.height / this.downSampling
		)

		this.smokeMaterial.uniforms.cameraProjectionMatrixInverse.value = this.camera.projectionMatrixInverse
	}

	public async destroy() {
		cancelAnimationFrame(this.animId)
		this.renderer.dispose()
		this.renderer.domElement.remove()
		this.stats.container.remove()
		this.gui.destroy()
	}
}

renderersReposditory.register('step4', Step4, 'Arm', 'add some fog')
