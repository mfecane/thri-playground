import { Mesh, OrthographicCamera, PlaneGeometry, ShaderMaterial, Vector2, WebGLRenderer } from 'three'

import quadVert from './shaders/quad_vert.glsl'

// change noises here

// import bufferAfrag from './shaders/classic_perlin_frag.glsl'
import bufferAfrag from './shaders/nikita_noise_frag.glsl'

export class Noise3D {
	private readonly COUNT = 64

	public renderer = new WebGLRenderer()

	private material1 = new ShaderMaterial({
		// TODO add mouse
		uniforms: {
			xedni: { value: 0 },
			total: { value: 0 },
		},

		vertexShader: quadVert,
		fragmentShader: bufferAfrag,

		depthTest: false,
		depthWrite: false,
		transparent: false,
	})

	private camera = new OrthographicCamera(0, 1, 1, 0, -1, 1)

	private quad = new Mesh(new PlaneGeometry(), this.material1)

	public constructor(private width: number, private height: number) {
		this.renderer.setSize(this.width, this.height)
		this.renderer.autoClear = false
	}

	public async init() {
		this.material1.uniforms.total.value = this.COUNT
	}

	private setQuadPosition(i: number, quantity: number) {
		const rowSize = Math.floor(Math.sqrt(quantity))
		const size = 1 / rowSize
		this.quad.scale.set(size, size, size)
		const x = i % rowSize
		const y = Math.floor(i / rowSize)
		this.quad.position.set(size / 2 + size * x, size / 2 + size * y, 0)
	}

	public render() {
		for (let i = 0; i < this.COUNT; i++) {
			this.material1.uniforms.xedni.value = i
			this.setQuadPosition(i, this.COUNT)
			this.renderer.render(this.quad, this.camera)
		}
	}
}
