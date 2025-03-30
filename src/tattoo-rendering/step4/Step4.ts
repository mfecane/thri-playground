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
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { Renderer } from '@/common/Renderer'
import * as dat from 'dat.gui'
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js'
import { Stats } from '@/common/Stats'
import { RenderersEnum, renderersReposditory } from '@/common/RendererList'
import { dumpShaderProgram } from '@/common/ThreeUtils'

import depthVert from './shaders/depth_and_alpha_display.vert.glsl'
import depthFrag from './shaders/depth_and_alpha_display.frag.glsl'

import depthAndAlphaVertSource from './shaders/alpha_and_depth.vert.glsl'
import depthAndAlphaFragSource from './shaders/alpha_and_depth.frag.glsl'

import smokeVert from '@/tattoo-rendering/step4/shaders/smoke_vert.glsl'
import smokeFrag from '@/tattoo-rendering/step4/shaders/smoke_frag.glsl'

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
		depthTexture: { value: null },
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

		derivative: { value: 0.0 },
	},

	vertexShader: smokeVert,

	fragmentShader: smokeFrag,
}

export class Step4 implements Renderer {
	/**
	 * CONSTANTS
	 */

	private SHADOW_MAP_WIDTH = 2048

	private SHADOW_MAP_HEIGHT = 2048

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
	private readonly downSampling = 1

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
		blending: NormalBlending,

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
			// gl_FragColor.rgb = mix(texture2D(readBuffer, vUv).rgb, smoke.rgb, smoke.a);
			// gl_FragColor.rgb = texture2D(readBuffer, vUv).rgb + smoke.rgb * smoke.a;
			// gl_FragColor.rgb = texture2D(readBuffer, vUv).rgb + smoke.rgb * smoke.a;
			gl_FragColor.rgb = texture2D(readBuffer, vUv).rgb + smoke.rgb;
			gl_FragColor.a = 1.0;
		}`,

		blending: NoBlending,
		transparent: false,
		depthTest: false,
		depthWrite: false,
	})

	//@ts-expect-error
	private mesh: Mesh

	//@ts-expect-error
	private light: DirectionalLight

	private startTime = 0

	// smoke parameters
	public scale2 = 4.0

	public scale3 = 1.0

	public derivative = 0.4

	public density = 0.1

	public constructor() {
		this.renderer = new WebGLRenderer({ antialias: true })
		this.renderer.autoClear = false
		this.renderer.shadowMap.enabled = true
		this.renderer.shadowMap.type = PCFShadowMap

		this.depthBuffer = new WebGLRenderTarget(this.width / this.downSampling, this.height / this.downSampling)
		this.depthBuffer.texture.name = 'Depth'
		this.depthBuffer.texture.generateMipmaps = false

		// TODO resize
		this.smokeBuffer = new WebGLRenderTarget(this.width / this.downSampling, this.height / this.downSampling)
		this.smokeBuffer.texture.name = 'Smoke Buffer'
		this.smokeBuffer.texture.generateMipmaps = false

		// TODO resize
		this.sceneBuffer = new WebGLRenderTarget(this.width, this.height)
		this.smokeBuffer.texture.name = 'Scene Buffer'
		this.smokeBuffer.texture.generateMipmaps = false

		document.body.appendChild(this.stats.container)

		this.gui = new dat.GUI()
		this.gui.add(this, 'scale', 0.0, 10.0)
		this.gui.add(this, 'scale2', 0.0, 10.0)
		this.gui.add(this, 'scale3', 0.0, 1.0)
		this.gui.add(this, 'derivative', 0.0, 1.0)
		this.gui.add(this, 'density', 0.0, 0.5)

		//@ts-expect-error
		window.renderer = this.renderer
	}

	// private gui: dat.GUI

	public async init() {
		this.renderer.setSize(this.width, this.height)

		document.body.appendChild(this.renderer.domElement)

		this.camera = new PerspectiveCamera(45, this.width / this.height, 0.1, 10.0)

		this.camera.position.set(2, 0, 2)

		// lighting

		const lightGroup = new Group()

		this.scene.add(new AmbientLight(0xffffff, 0.2))

		this.light = new DirectionalLight(this.COLD_COLOR, 2)

		this.light.castShadow = true
		this.light.shadow.camera.top = 2.0
		this.light.shadow.camera.bottom = -2.0
		this.light.shadow.camera.left = -2.0
		this.light.shadow.camera.right = 2.0
		this.light.shadow.camera.near = 0.01
		this.light.shadow.camera.far = 5.0

		this.light.shadow.bias = 0.0001
		this.light.shadow.mapSize.width = this.SHADOW_MAP_WIDTH
		this.light.shadow.mapSize.height = this.SHADOW_MAP_HEIGHT
		this.light.shadow.radius = 50
		this.light.shadow.blurSamples = 32

		lightGroup.add(this.light)

		this.scene.add(lightGroup)

		this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

		const loader = new FBXLoader()

		const textureLoader = new TextureLoader()

		this.mesh = await new Promise<Mesh>((resolve) => {
			loader.load('assets/models/arm/arm.fbx', (loaded) => resolve(loaded.children[0] as Mesh))
		})

		this.mesh.scale.set(0.1, 0.1, 0.1)
		this.mesh.castShadow = true
		this.mesh.receiveShadow = true

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

		const material = new MeshPhysicalMaterial()

		material.depthTest = true
		material.transparent = true
		material.map = this.colorMap
		material.normalMap = armNormalTexture
		material.roughnessMap = armOccMetRoughTexture
		material.metalnessMap = armOccMetRoughTexture
		material.sheen = 0.1
		material.sheenRoughness = 0.2
		material.sheenColor = new Color(0xffffff)

		this.mesh.material = material

		// this.depthMaterial.map = this.colorMap
		// this.depthMaterial.transparent = true

		// this.depthMaterial2.map = this.colorMap
		this.depthAndAlphaMaterial.uniforms.map.value = this.colorMap

		this.scene.add(this.mesh)

		// some debug
		// window.setTimeout(() => {
		// 	dumpShaderProgram(this.renderer, this.depthAndAlphaMaterial)
		// }, 2000)

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
	}

	public async animate() {
		this.stats.begin()

		// move light
		let time = performance.now() * 0.002
		this.light.position.x = Math.sin(time * 0.3) * 3.0
		this.light.position.y = 1.0
		this.light.position.z = Math.cos(time * 0.3) * 3.0

		// render scene
		this.renderer.setRenderTarget(this.sceneBuffer)
		this.scene.background = new Color(0x000000)
		this.renderer.render(this.scene, this.camera)
		this.scene.background = null

		// render depth pass
		this.scene.background = new Color(0xffffff)
		this.renderer.setRenderTarget(this.depthBuffer)
		this.scene.overrideMaterial = this.depthAndAlphaMaterial
		this.renderer.setClearColor(0x000000)
		this.renderer.setClearAlpha(0.0)
		this.renderer.clear()
		this.renderer.render(this.scene, this.camera)
		this.scene.overrideMaterial = null
		this.scene.background = null

		// test depth buffer
		// this.renderer.setRenderTarget(null)
		// this.renderer.setClearColor(0x000000)
		// this.renderer.setClearAlpha(1.0)
		// this.renderer.clear()

		// render smoke

		this.smokeMaterial.uniforms['depthTexture'].value = this.depthBuffer.texture
		this.smokeMaterial.uniforms['cameraPosition'].value = this.camera.position
		this.smokeMaterial.uniforms.time.value = (Date.now() - this.startTime) / 10000

		this.smokeMaterial.uniforms['shadowMap'].value = this.light.shadow.map!.texture
		this.smokeMaterial.uniforms['directionalShadowMatrix'].value = this.light.shadow.matrix

		this.smokeMaterial.uniforms.lightPosition.value = this.light.position.normalize()
		this.smokeMaterial.uniforms.derivative.value = this.derivative

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
		this.renderer.setClearColor(0xff0000)
		this.renderer.setClearAlpha(1.0)
		this.renderer.clear()
		this.fsQuad.render(this.renderer)

		// this.fsQuad.material = this.depthDispayMaterial
		// this.depthDispayMaterial.uniforms.cameraNearFar.value.set(this.camera.near, this.camera.far)
		// this.depthDispayMaterial.uniforms.tDepth.value = this.depthBuffer.texture
		// this.depthDispayMaterial.uniforms.scale.value = this.scale

		// this.fsQuad.render(this.renderer)

		this.orbitControls.update()

		this.animId = requestAnimationFrame(async () => await this.animate())

		this.stats.end()
	}

	public async onResize(width: number, height: number) {
		this.width = width
		this.height = height

		this.depthBuffer.setSize(this.width / this.downSampling, this.height / this.downSampling)

		this.renderer.setSize(this.width, this.height)

		this.camera.aspect = this.width / this.height
		this.camera.updateProjectionMatrix()
	}

	public async destroy() {
		cancelAnimationFrame(this.animId)
		this.renderer.dispose()
		this.renderer.domElement.remove()
		this.stats.container.remove()
		this.gui.destroy()
	}
}

renderersReposditory.register(RenderersEnum.step4, Step4, 'Arm', 'add some fog')
