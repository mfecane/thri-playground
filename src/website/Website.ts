import { Renderer } from '@/common/Renderer'
import { RenderersEnum, renderersReposditory } from '@/common/RendererList'
import { DepthOfFieldEffect, EffectComposer, EffectPass, RenderPass } from 'postprocessing'
import { Mesh, MeshBasicMaterial, PerspectiveCamera, PointLight, Scene, SphereGeometry, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'

export class Website implements Renderer {
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
		this.camera.position.set(-100, 0, 0)

		const lightSphere = new Mesh(new SphereGeometry(10, 32, 32), new MeshBasicMaterial({ color: 0xffffff }))
		lightSphere.position.set(0, 0, -50)
		this.scene.add(lightSphere)

		const pointLight = new PointLight(0xffffff, 5, 100)
		pointLight.position.copy(lightSphere.position)
		this.scene.add(pointLight)

		this.composer.addPass(new RenderPass(this.scene, this.camera))

		this.composer.setSize(this.width, this.height)

		const effectPass = new EffectPass(this.camera, this.dofEffect)
		effectPass.renderToScreen = true
		this.composer.addPass(effectPass)
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

renderersReposditory.register(RenderersEnum.website, Website, 'Website', '')
