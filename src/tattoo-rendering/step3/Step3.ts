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
import {  renderersReposditory } from '@/common/RendererList'
import { dumpShaderProgram } from '@/common/ThreeUtils'

import depthVert from './shaders/depth_and_alpha_display.vert.glsl'
import depthFrag from './shaders/depth_and_alpha_display.frag.glsl'

import depthAndAlphaVertSource from './shaders/alpha_and_depth.vert.glsl'
import depthAndAlphaFragSource from './shaders/alpha_and_depth.frag.glsl'

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

export class Step3 implements Renderer {
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

	//@ts-expect-error
	private mesh: Mesh

	public constructor() {
		this.renderer = new WebGLRenderer({ antialias: true })
		this.renderer.autoClear = false
		this.renderer.shadowMap.enabled = true
		this.renderer.shadowMap.type = PCFShadowMap

		this.depthBuffer = new WebGLRenderTarget(this.width / this.downSampling, this.height / this.downSampling)
		this.depthBuffer.texture.name = 'Depth'
		this.depthBuffer.texture.generateMipmaps = false

		document.body.appendChild(this.stats.container)

		this.gui = new dat.GUI()
		this.gui.add(this, 'scale', 0.0, 10.0)

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

		const mainLight = new DirectionalLight(this.COLD_COLOR, 2)
		mainLight.position.set(2.0, 1.5, 1.0)

		mainLight.castShadow = true
		mainLight.shadow.camera.top = 2.0
		mainLight.shadow.camera.bottom = -2.0
		mainLight.shadow.camera.left = -2.0
		mainLight.shadow.camera.right = 2.0
		mainLight.shadow.camera.near = 0.01
		mainLight.shadow.camera.far = 5.0

		mainLight.shadow.bias = 0.0001
		mainLight.shadow.mapSize.width = this.SHADOW_MAP_WIDTH
		mainLight.shadow.mapSize.height = this.SHADOW_MAP_HEIGHT
		mainLight.shadow.radius = 50
		mainLight.shadow.blurSamples = 32

		lightGroup.add(mainLight)

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
	}

	public async animate() {
		this.stats.begin()

		// render depth pass
		this.renderer.setRenderTarget(this.depthBuffer)
		this.scene.overrideMaterial = this.depthAndAlphaMaterial
		this.renderer.setClearColor(0x000000)
		this.renderer.setClearAlpha(0.0)
		this.renderer.clear()
		this.renderer.render(this.scene, this.camera)

		// test depth buffer
		this.renderer.setRenderTarget(null)
		this.renderer.setClearColor(0x000000)
		this.renderer.setClearAlpha(1.0)
		this.renderer.clear()

		this.fsQuad.material = this.depthDispayMaterial
		this.depthDispayMaterial.uniforms.cameraNearFar.value.set(this.camera.near, this.camera.far)
		this.depthDispayMaterial.uniforms.tDepth.value = this.depthBuffer.texture
		this.depthDispayMaterial.uniforms.scale.value = this.scale

		this.fsQuad.render(this.renderer)

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

renderersReposditory.register('step3', Step3, 'Arm', 'depth and alpha visualization')
