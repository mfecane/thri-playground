import { Renderer } from '@/common/Renderer'
import {  renderersReposditory } from '@/common/RendererList'
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export class Website implements Renderer {
	private width = window.innerWidth

	private height = window.innerHeight

	private camera = new PerspectiveCamera(60, this.width / this.height, 0.1, 1000)

	public renderer = new WebGLRenderer({ antialias: true, premultipliedAlpha: false })

	private orbitControls: OrbitControls = new OrbitControls(this.camera, this.renderer.domElement)

	private animId: number = -1

	private scene = new Scene()

	public constructor() {
		this.renderer.autoClear = false
	}

	public async init(): Promise<void> {
		document.body.appendChild(this.renderer.domElement)
	}

	public async animate(): Promise<void> {
		this.orbitControls.update()
		this.renderer.render(this.scene, this.camera)
		this.animId = requestAnimationFrame(async () => await this.animate())
	}

	public async onResize(width: number, height: number): Promise<void> {
		this.width = width
		this.height = height
	}

	public async destroy(): Promise<void> {
		cancelAnimationFrame(this.animId)
		this.renderer.dispose()
		this.renderer.domElement.remove()
	}
}

renderersReposditory.register('website', Website, 'Website', '')
