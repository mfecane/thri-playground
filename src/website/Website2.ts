import { Renderer } from '@/common/Renderer'
import { renderersReposditory } from '@/common/RendererList'
import { DepthOfFieldEffect, EffectComposer, EffectPass, RenderPass } from 'postprocessing'
import {
	AmbientLight,
	AxesHelper,
	CylinderGeometry,
	Group,
	Mesh,
	MeshBasicMaterial,
	MeshStandardMaterial,
	PerspectiveCamera,
	PointLight,
	Scene,
	SphereGeometry,
	Vector3,
	WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'
import { generateSpaceColonizationTree } from './Tree'
import { createSakuraFlower } from './Flower'
import { createSakuraFlower2 } from './Flower2'
import { generateSmoothCubemap } from './env'

export class Website2 implements Renderer {
	private width = window.innerWidth

	private height = window.innerHeight

	private camera = new PerspectiveCamera(60, this.width / this.height, 0.1, 1000)

	public renderer = new WebGLRenderer({ antialias: true, premultipliedAlpha: false })

	private composer = new EffectComposer(this.renderer)

	private orbitControls: OrbitControls = new OrbitControls(this.camera, this.renderer.domElement)

	private animId: number = -1

	private scene = new Scene()

	public focusDistance: number = 0.02

	public focalLength: number = 0.03

	private gui = new dat.GUI()

	private dofEffect = new DepthOfFieldEffect(this.camera, {
		focusDistance: this.focusDistance,
		focalLength: this.focalLength,
		bokehScale: 4.0,
	})

	public constructor() {
		this.renderer.autoClear = false
		this.renderer.setSize(this.width, this.height)

		document.body.appendChild(this.renderer.domElement)

		this.gui.add(this, 'focusDistance', 0.0, 0.1)
		this.gui.add(this, 'focalLength', 0.0, 0.1)
	}

	public async init(): Promise<void> {
		this.camera.position.set(-2, 5, 10)
		this.camera.lookAt(0, 5, 0)

		// const lightSphere = new Mesh(new SphereGeometry(10, 32, 32), new MeshBasicMaterial({ color: 0xffffff }))
		// lightSphere.position.set(0, 0, -50)
		// this.scene.add(lightSphere)

		const al = new AmbientLight(0xffffff, 1)
		this.scene.add(al)

		const pointLight = new PointLight(0xffffff, 20, 100)
		// pointLight.position.copy(lightSphere.position)
		pointLight.position.set(5, 1, -5)
		this.scene.add(pointLight)

		const pointLight2 = new PointLight(0xffffff, 30, 100)
		// pointLight.position.copy(lightSphere.position)
		pointLight2.position.set(-5, 1, 5)
		this.scene.add(pointLight2)

		this.composer.addPass(new RenderPass(this.scene, this.camera))

		this.composer.setSize(this.width, this.height)

		const effectPass = new EffectPass(this.camera, this.dofEffect)
		effectPass.renderToScreen = true
		this.composer.addPass(effectPass)

		const ah = new AxesHelper()
		this.scene.add(ah)

		const d = await createSakuraFlower2()
		d.scale.set(0.1,0.1,0.1)
		//@ts-expect-error
		const trunk = generateSpaceColonizationTree({tipMesh: d})
		this.scene.add(trunk)

		// const flower = createSakuraFlower()
		// this.scene.add(flower)

		// this.scene.add(d)

		const cm = generateSmoothCubemap(this.renderer)
		this.scene.background = cm
	}

	public async animate(): Promise<void> {
		this.orbitControls.update()

		this.dofEffect.cocMaterial.focusDistance = this.focusDistance
		this.dofEffect.cocMaterial.focalLength = this.focalLength

		this.composer.render()

		this.animId = requestAnimationFrame(async () => await this.animate())
	}

	public async onResize(width: number, height: number): Promise<void> {
		this.width = width
		this.height = height

		this.renderer.setSize(this.width, this.height)
		this.composer.setSize(this.width, this.height)

		this.camera.aspect = this.width / this.height
		this.camera.updateProjectionMatrix()
	}

	public async destroy(): Promise<void> {
		cancelAnimationFrame(this.animId)
		this.renderer.dispose()
		this.renderer.domElement.remove()
		this.gui.destroy()
	}
}

renderersReposditory.register('website2', Website2, 'Website2', '')
