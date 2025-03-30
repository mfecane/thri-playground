import {
	AmbientLight,
	BoxGeometry,
	Color,
	DirectionalLight,
	Mesh,
	MeshStandardMaterial,
	PCFShadowMap,
	PerspectiveCamera,
	PlaneGeometry,
	Scene,
	Vector2,
	Vector3,
	WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { SmokePass } from './SmokePass'
import { Renderer } from '@/common/Renderer'
import { Stats } from '@/common/Stats'

//@ts-ignore fuck off
import * as dat from 'dat.gui'

export class FogRenderer implements Renderer {
	/**
	 * CONSTANTS
	 */

	public renderer: WebGLRenderer

	/**
	 * COMPOSER
	 */
	public composer: EffectComposer

	//@ts-expect-error
	private pass: SmokePass

	//@ts-expect-error
	private camera: PerspectiveCamera

	//@ts-expect-error
	private stats: Stats

	//@ts-expect-error
	private scene: Scene

	//@ts-expect-error
	private light: DirectionalLight

	//@ts-expect-error
	private camera: PerspectiveCamera

	//@ts-expect-error
	private orbitControls: OrbitControls

	private animId: number = -1

	//@ts-expect-error
	private gui: dat.GUI

	public constructor() {
		this.renderer = new WebGLRenderer({ antialias: true })

		this.composer = new EffectComposer(this.renderer)
	}

	public async init() {
		this.renderer.shadowMap.enabled = true
		this.renderer.shadowMap.type = PCFShadowMap

		this.scene = new Scene()
		this.scene.background = new Color(0.05, 0.05, 0.07)
		this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

		const cube = new Mesh(new BoxGeometry(1, 1.0, 1), new MeshStandardMaterial({ color: 0xffffff }))
		cube.castShadow = true
		cube.receiveShadow = true
		cube.position.set(0.0, 0.5, 0.0)
		this.scene.add(cube)

		const plane = new Mesh(new PlaneGeometry(6, 6), new MeshStandardMaterial({ color: 0xcccccc }))
		plane.rotateOnAxis(new Vector3(1, 0, 0), -Math.PI / 2)
		plane.position.set(0, -0.5, 0)
		plane.receiveShadow = true
		this.scene.add(plane)

		this.light = new DirectionalLight(0xe6f6ff, 1.0)
		this.light.position.set(0, 2, 0)

		this.light.castShadow = true
		this.light.shadow.camera.near = 0.1
		this.light.shadow.camera.far = 8.0
		this.light.shadow.camera.top = 2.0
		this.light.shadow.camera.bottom = -2.0
		this.light.shadow.camera.left = -2.0
		this.light.shadow.camera.right = 2.0

		this.scene.add(this.light)

		this.scene.add(new AmbientLight(0xffeae6, 0.1))

		this.camera.position.set(-3, 1, 3)
		this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

		this.renderer.setSize(window.innerWidth, window.innerHeight)
		document.body.appendChild(this.renderer.domElement)

		this.composer = new EffectComposer(this.renderer)
		this.composer.addPass(new RenderPass(this.scene, this.camera))
		// composer.addPass(new ShaderPass(GammaCorrectionShader))
		this.pass = new SmokePass(this.scene, this.camera, new Vector2(window.innerWidth, window.innerHeight), this.light)
		this.pass.init()
		this.composer.addPass(this.pass)

		// const ah = new AxesHelper()
		// scene.add(ah)

		this.stats = new Stats()
		document.body.appendChild(this.stats.container)

		this.gui = new dat.GUI()
		this.gui.add(this.pass, 'scale2', 0.0, 10.0)
		this.gui.add(this.pass, 'scale3', 0.0, 1.0)
		this.gui.add(this.pass, 'derivative', 0.0, 1.0)
		this.gui.add(this.pass, 'density', 0.0, 1.0)
	}

	public async animate() {
		// await new Promise((resolve) => setTimeout(resolve, 200))

		this.stats.begin()

		let time = performance.now() * 0.002

		this.light.position.x = Math.sin(time * 0.1) * 4.0
		this.light.position.y = 1.0
		this.light.position.z = Math.cos(time * 0.1) * 4.0

		this.composer.render()
		this.orbitControls.update()

		this.stats.end()

		this.animId = requestAnimationFrame(async () => await this.animate())
	}

	public async onResize(width: number, height: number) {
		this.renderer.setSize(width, height)
		this.composer.setSize(width, height)
		this.camera.aspect = width / height
		this.camera.updateProjectionMatrix()
	}

	public async destroy() {
		cancelAnimationFrame(this.animId)
		this.renderer.dispose()
		this.stats.container.remove()
		this.renderer.domElement.remove()
		this.gui.destroy()
	}
}
