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
	AxesHelper,
	MeshDepthMaterial,
	DoubleSide,
	RGBADepthPacking,
	NoBlending,
	WebGLRenderTarget,
	ShaderMaterial,
	UniformsUtils,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { Renderer } from '@/common/Renderer'
import { IShatMyselfPass } from './IShatMyselfPass'
import * as dat from 'dat.gui'
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js'
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js'
import { Stats } from '@/common/Stats'

export class Step2 implements Renderer {
	/**
	 * CONSTANTS
	 */

	private SHADOW_MAP_WIDTH = 2048

	private SHADOW_MAP_HEIGHT = 2048

	private COLD_COLOR = new Color(0xc7e3f2)

	public renderer: WebGLRenderer

	/**
	 * COMPOSER
	 */
	public composer: EffectComposer

	//@ts-expect-error
	private renderPass: RenderPass

	//@ts-expect-error
	private outputPass: OutputPass

	//@ts-expect-error
	private pass: IShatMyselfPass

	//@ts-expect-error
	private orbitControls: OrbitControls

	private textureLoader = new TextureLoader()

	//@ts-expect-error
	private camera: PerspectiveCamera

	private animId: number = -1

	private depthMaterial: MeshDepthMaterial

	private scene = new Scene()

	/**
	 * For fog effects
	 */
	private readonly downSampling = 2

	private depthBuffer: WebGLRenderTarget

	private width = window.innerWidth

	private height = window.innerHeight

	private fsQuad = new FullScreenQuad()

	private copyShader = CopyShader

	private stats = new Stats()

	private copyMaterial = new ShaderMaterial({
		uniforms: UniformsUtils.clone(this.copyShader.uniforms),
		vertexShader: this.copyShader.vertexShader,
		fragmentShader: this.copyShader.fragmentShader,
		blending: NoBlending,
		depthTest: false,
		depthWrite: false,
	})

	public constructor() {
		this.renderer = new WebGLRenderer({ antialias: true })
		this.renderer.shadowMap.enabled = true
		this.renderer.shadowMap.type = PCFShadowMap

		this.composer = new EffectComposer(this.renderer)

		this.depthMaterial = new MeshDepthMaterial()
		this.depthMaterial.side = DoubleSide
		this.depthMaterial.depthPacking = RGBADepthPacking
		this.depthMaterial.blending = NoBlending

		this.scene.background = new Color(0.05, 0.05, 0.07)

		this.depthBuffer = new WebGLRenderTarget(this.width / this.downSampling, this.height / this.downSampling)
		this.depthBuffer.texture.name = 'Depth'
		this.depthBuffer.texture.generateMipmaps = false

		document.body.appendChild(this.stats.container)
	}

	//@ts-expect-error
	private gui: dat.GUI

	public async init() {
		this.renderer.setSize(this.width, this.height)

		this.composer.setSize(this.width, this.height)

		this.renderer.setClearColor(0x000000)

		this.renderer.setClearAlpha(1.0)

		this.renderer.autoClear = false

		document.body.appendChild(this.renderer.domElement)

		this.camera = new PerspectiveCamera(45, this.width / this.height, 0.1, 1000.0)

		this.camera.position.set(2, 0, 2)

		// composer.addPass(new RenderPass(scene, camera))

		// tPass = new TPass(scene, camera, new Vector2(window.innerWidth, window.innerHeight))

		// composer.addPass(tPass)

		// taaRenderPass = new TAARenderPass(scene, camera, 0x000000, 1)

		// taaRenderPass.sampleLevel = 1

		// composer.addPass(taaRenderPass)

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

		this.renderPass = new RenderPass(this.scene, this.camera)
		this.composer.addPass(this.renderPass)

		this.pass = new IShatMyselfPass(
			this.scene,
			this.camera,
			new Vector2(window.innerWidth, window.innerHeight),
			mainLight
		)
		await this.pass.init()
		this.composer.addPass(this.pass)

		// this.outputPass = new OutputPass()
		// this.composer.addPass(this.outputPass)

		this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

		const loader = new FBXLoader()

		const textureLoader = new TextureLoader()

		const mesh = await new Promise<Mesh>((resolve) => {
			loader.load('assets/models/arm/arm.fbx', (loaded) => resolve(loaded.children[0] as Mesh))
		})

		mesh.scale.set(0.1, 0.1, 0.1)
		mesh.castShadow = true
		mesh.receiveShadow = true

		const baseColor = await new Promise<Texture>((resolve) => {
			textureLoader.load('assets/models/arm/diffuse.png', (loaded) => resolve(loaded))
		})

		baseColor.colorSpace = SRGBColorSpace

		const armOccMetRoughTexture = await new Promise<Texture>((resolve) => {
			textureLoader.load('assets/models/arm/arm_OccMetRough.png', (loaded) => resolve(loaded))
		})

		baseColor.colorSpace = LinearSRGBColorSpace

		const armNormalTexture = await new Promise<Texture>((resolve) => {
			textureLoader.load('assets/models/arm/arm_Normal.png', (loaded) => resolve(loaded))
		})

		baseColor.colorSpace = LinearSRGBColorSpace

		const material = new MeshPhysicalMaterial()

		material.depthTest = true
		material.transparent = true
		// material.alphaHash = true
		material.map = baseColor
		material.normalMap = armNormalTexture
		material.roughnessMap = armOccMetRoughTexture
		material.metalnessMap = armOccMetRoughTexture
		material.sheen = 0.1
		material.sheenRoughness = 0.2
		material.sheenColor = new Color(0xffffff)

		mesh.material = material

		// const ah = new AxesHelper()
		// scene.add(ah)

		this.scene.add(mesh)

		this.gui = new dat.GUI()
		this.gui.add(this.pass, 'scale2', 0.0, 10.0)
		this.gui.add(this.pass, 'scale3', 0.0, 1.0)
		this.gui.add(this.pass, 'derivative', 0.0, 1.0)
		this.gui.add(this.pass, 'density', 0.0, 1.0)
	}

	public async animate() {
		try {
			this.stats.begin()
			// render depth pass
			this.renderer.setRenderTarget(this.depthBuffer)
			this.scene.overrideMaterial = this.depthMaterial
			this.renderer.clear()
			this.renderer.render(this.scene, this.camera)

			// test depth buffer
			this.renderer.setRenderTarget(null)
			this.fsQuad.material = this.copyMaterial
			this.copyMaterial.uniforms.tDiffuse.value = this.depthBuffer.texture
			this.fsQuad.render(this.renderer)

			this.orbitControls.update()

			this.animId = requestAnimationFrame(async () => await this.animate())

			this.stats.end()
		} catch (error) {
			console.error(error)
		}
	}

	public async onResize(width: number, height: number) {
		this.width = width
		this.height = height

		this.depthBuffer.setSize(this.width / this.downSampling, this.height / this.downSampling)

		this.renderer.setSize(this.width, this.height)
		this.composer.setSize(this.width, this.height)

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
