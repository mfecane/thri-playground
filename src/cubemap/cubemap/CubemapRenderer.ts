import {
	AxesHelper,
	EquirectangularReflectionMapping,
	NoBlending,
	PMREMGenerator,
	PerspectiveCamera,
	Scene,
	ShaderMaterial,
	Texture,
	Vector2,
	WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js'
import depthVert from './shaders/quad_vert.glsl'
import depthFrag from './shaders/cube_sampler_blurred.glsl'
import { Renderer } from '@/common/Renderer'
import { renderersReposditory } from '@/common/RendererList'

let mMaterial: ShaderMaterial

export class CubemapRenderer implements Renderer {
	public renderer = new WebGLRenderer()

	private width = window.innerWidth

	private height = window.innerHeight

	private camera = new PerspectiveCamera(45, this.width / this.height, 0.1, 1000.0)

	private scene = new Scene()

	private controls = new OrbitControls(this.camera, this.renderer.domElement)

	private fsQuad = new FullScreenQuad()

	private animId: number = -1

	public constructor() {
		mMaterial = new ShaderMaterial({
			defines: {
				ENVMAP_TYPE_CUBE_UV: 1,
				CUBEUV_TEXEL_WIDTH: 1 / this.width,
				CUBEUV_TEXEL_HEIGHT: 1 / this.height,
				CUBEUV_MAX_MIP: `0.0`,
			},
			uniforms: {
				cameraWorldMatrix: { value: null },
				cameraProjectionMatrixInverse: { value: null },
				resolution: { value: null },
				envMap: { value: null },
			},
			vertexShader: depthVert,
			fragmentShader: depthFrag,
			blending: NoBlending,
			depthTest: false,
			depthWrite: false,
		})
	}

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
		// this.scene.background = texture
		this.scene.backgroundBlurriness = 0.0
		this.scene.backgroundIntensity = 0.02
		this.camera.position.set(0.0, 0.0, -5.0)

		// this.composer.addPass(new RenderPass(this.scene, this.camera))
		// this.composer.addPass(new BokehPass(this.scene, this.camera, { focus: 1.0, aperture: 0.5, maxblur: 0.03 }))

		mMaterial.uniforms.cameraWorldMatrix.value = this.camera.matrixWorld
		mMaterial.uniforms.cameraProjectionMatrixInverse.value = this.camera.projectionMatrixInverse.clone()
		mMaterial.uniforms.resolution.value = new Vector2(this.width, this.height)
		mMaterial.uniforms.envMap.value = texture
		this.fsQuad.material = mMaterial
		
		document.body.appendChild(this.renderer.domElement)
	}

	public async animate(): Promise<void> {
		this.controls.update()
		this.fsQuad.render(this.renderer)
		// const s = new Scene()
		// this.renderer.autoClear = false
		// s.add(new AxesHelper())
		// this.renderer.render(s, this.camera)

		
		this.animId = requestAnimationFrame(async () => await this.animate())
	}

	public async onResize(width: number, height: number): Promise<void> {
		this.width = width
		this.height = height

		this.renderer.setSize(this.width, this.height)

		this.camera.aspect = this.width / this.height
		this.camera.updateProjectionMatrix()
	}

	public async destroy(): Promise<void> {
		cancelAnimationFrame(this.animId)
		this.renderer.dispose()
		this.renderer.domElement.remove()
	}
}


renderersReposditory.register('CubemapRenderer', CubemapRenderer, 'CubemapRenderer', '')
