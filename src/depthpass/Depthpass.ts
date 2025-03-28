import {
	BoxGeometry,
	Mesh,
	MeshStandardMaterial,
	PCFShadowMap,
	PerspectiveCamera,
	PlaneGeometry,
	PointLight,
	Scene,
	Vector2,
	Vector3,
	WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { DepthRenderPass } from './DepthRenderPass'
import { Renderer } from '@/common/Renderer'

export class Depthpass implements Renderer {
	public renderer = new WebGLRenderer({ antialias: true })

	private composer = new EffectComposer(this.renderer)

	private scene = new Scene()

	private light = new PointLight(0xffc9b8, 2.0, 20)

	private width = window.innerWidth

	private height = window.innerHeight

	private camera = new PerspectiveCamera(75, this.width / this.height, 0.1, 1000)

	private controls = new OrbitControls(this.camera, this.renderer.domElement)

	private animId: number = -1

	public constructor() {
		this.renderer.shadowMap.enabled = true
		this.renderer.shadowMap.type = PCFShadowMap
		this.renderer.setSize(this.width, this.height)
	}

	public async init() {
		this.scene = new Scene()

		this.light.position.set(0, 2, 0)
		this.light.castShadow = true
		this.scene.add(this.light)

		const cube = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color: 0xffffff }))
		cube.castShadow = true
		cube.receiveShadow = true
		this.scene.add(cube)

		const plane = new Mesh(new PlaneGeometry(4, 4), new MeshStandardMaterial({ color: 0xcccccc }))
		plane.rotateOnAxis(new Vector3(1, 0, 0), -Math.PI / 2)
		plane.position.set(0, -0.5, 0)
		plane.receiveShadow = true
		this.scene.add(plane)

		this.camera.position.set(0, 1, 4)

		this.composer = new EffectComposer(this.renderer)
		this.composer.addPass(new RenderPass(this.scene, this.camera))
		// composer.addPass(new ShaderPass(GammaCorrectionShader))
		this.composer.addPass(
			new DepthRenderPass(this.scene, this.camera, new Vector2(this.width, this.height))
		)

		document.body.appendChild(this.renderer.domElement)
	}

	public async animate() {
		try {
			let time = performance.now() * 0.002

			this.light.position.x = Math.sin(time * 0.8) * 1
			this.light.position.y = 2
			this.light.position.z = Math.cos(time * 0.8) * 1

			this.composer.render()
			this.controls.update()

			this.animId = requestAnimationFrame(async () => await this.animate())
		} catch (error) {
			console.error(error)
		}
	}

	public async onResize(width: number, height: number) {
		this.width = width
		this.height = height

		this.renderer.setSize(this.width, this.height)
		this.composer.setSize(this.width, this.height)

		this.camera.aspect = this.width / this.height
		this.camera.updateProjectionMatrix()
	}

	public async destroy() {
		cancelAnimationFrame(this.animId)
		this.renderer.dispose()
		this.renderer.domElement.remove()
	}
}
