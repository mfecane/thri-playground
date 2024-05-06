import {
	EquirectangularReflectionMapping,
	PMREMGenerator,
	PerspectiveCamera,
	Scene,
	Texture,
	WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js'

export class Biba {
	public renderer = new WebGLRenderer()

	private camera = new PerspectiveCamera(45, this.width / this.height, 0.1, 1000.0)

	private scene = new Scene()

	private controls = new OrbitControls(this.camera, this.renderer.domElement)

	private composer = new EffectComposer(this.renderer)

	public constructor(private width: number, private height: number) {}

	public async init() {
		this.renderer.setSize(this.width, this.height)
		const texture = await new Promise<Texture>((resolve) =>
			new EXRLoader().load('assets/hdri/empty_warehouse_01_4k.exr', (texture) => {
				texture.mapping = EquirectangularReflectionMapping
				const prgen = new PMREMGenerator(this.renderer)
				const rt = prgen.fromEquirectangular(texture)
				return resolve(rt.texture)
			})
		)
		this.scene.background = texture
		this.scene.backgroundBlurriness = 0.3
		this.scene.backgroundIntensity = 0.01
		this.camera.position.set(0.0, 0.0, -5.0)

		this.composer.addPass(new RenderPass(this.scene, this.camera))
		// this.composer.addPass(new BokehPass(this.scene, this.camera, { focus: 1.0, aperture: 0.5, maxblur: 0.03 }))
	}

	public render() {
		this.controls.update()
		this.composer.render()
	}
}
