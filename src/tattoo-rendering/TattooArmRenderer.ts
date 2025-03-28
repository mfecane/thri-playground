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
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { Renderer } from '@/common/Renderer'

export class TattooArmRenderer implements Renderer {
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
	private orbitControls: OrbitControls

	private textureLoader = new TextureLoader()

	private animId: number = -1

	public constructor() {
		this.renderer = new WebGLRenderer({ antialias: true })

		this.composer = new EffectComposer(this.renderer)
	}

	public async init() {
		this.renderer.setSize(window.innerWidth, window.innerHeight)

		this.composer.setSize(window.innerWidth, window.innerHeight)

		this.renderer.setClearColor(0x000000)

		this.renderer.setClearAlpha(1.0)

		this.renderer.autoClear = false

		document.body.appendChild(this.renderer.domElement)

		const scene = new Scene()

		const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000.0)

		camera.position.set(2, 2, 5)

		// composer.addPass(new RenderPass(scene, camera))

		// tPass = new TPass(scene, camera, new Vector2(window.innerWidth, window.innerHeight))

		// composer.addPass(tPass)

		// taaRenderPass = new TAARenderPass(scene, camera, 0x000000, 1)

		// taaRenderPass.sampleLevel = 1

		// composer.addPass(taaRenderPass)

		this.renderPass = new RenderPass(scene, camera)

		this.outputPass = new OutputPass()

		this.composer.addPass(this.renderPass)

		this.composer.addPass(this.outputPass)

		this.orbitControls = new OrbitControls(camera, this.renderer.domElement)

		// lighting

		const lightGroup = new Group()

		scene.add(new AmbientLight(0xffffff, 0.2))

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

		scene.add(lightGroup)

		const loader = new FBXLoader()

		const textureLoader = new TextureLoader()

		const mesh = await new Promise<Mesh>((resolve) => {
			loader.load('assets/models/arm/arm.fbx', (loaded) => resolve(loaded.children[0] as Mesh))
		})

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
		material.alphaHash = true
		material.map = baseColor
		material.normalMap = armNormalTexture
		material.roughnessMap = armOccMetRoughTexture
		material.metalnessMap = armOccMetRoughTexture
		material.sheen = 0.1
		material.sheenRoughness = 0.2
		material.sheenColor = new Color(0xffffff)

		mesh.material = material

		scene.add(mesh)
	}

	public async animate() {
		// const now = Date.now()

		// if (now - then < 1000 / fpsCap) {
		// 	requestAnimationFrame(animate)
		// 	return
		// }

		// index++
		// if (taaRenderPass) {
		// 	if (index % 5 === 0) {
		// 		taaRenderPass.accumulate = false
		// 	} else {
		// 		taaRenderPass.accumulate = true
		// 	}
		// }

		// if (camera.position.distanceTo(prevCamPos) > 0.001) {
		// 	tPass.decrease()
		// } else {
		// 	tPass.increase()
		// }

		// renderer.clear()
		this.composer.render()
		this.orbitControls.update()

		// const delta = performance.now() - frameTime
		// console.log(1000 / delta)

		// frameTime = performance.now()

		// then = Date.now()

		this.composer.render()

		requestAnimationFrame(async () => await this.animate())
	}

	public async onResize(width: number, height: number) {
		this.renderer.setSize(width, height)
	}

	public async destroy() {
		cancelAnimationFrame(this.animId);
		this.renderer.domElement.remove()
		this.orbitControls.dispose()
		this.renderer.dispose()
	}
}
