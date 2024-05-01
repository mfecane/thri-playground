import {
	WebGLRenderer,
	WebGLRenderTarget,
	Texture,
	ShaderMaterial,
	NoBlending,
	Vector2,
	Scene,
	MeshDepthMaterial,
	RGBADepthPacking,
	DoubleSide,
	Matrix4,
	PerspectiveCamera,
} from 'three'
import { FullScreenQuad, Pass } from 'three/examples/jsm/postprocessing/Pass.js'

import depthVert from './shaders/depth_vert.glsl'
import depthFrag from './shaders/depth_frag.glsl'

let startTime = Date.now()

const DepthShader = {
	name: 'DepthShader',

	defines: {
		DEPTH_PACKING: 1,
		PERSPECTIVE_CAMERA: 1,
	},

	uniforms: {
		colorTexture: { value: null },
		depthTexture: { value: null },
		cameraNearFar: { value: new Vector2(0.5, 0.5) },
		textureMatrix: { value: null },
		resolution: { value: null },
		cameraWorldMatrix: { value: null },
		cameraProjectionMatrixInverse: { value: null },
		cameraPosition: { value: null },
		time: { value: 0 },
	},

	vertexShader: depthVert,

	fragmentShader: depthFrag,
}

export class IShatMyselfPass extends Pass {
	private material: ShaderMaterial

	private depthBuffer = new WebGLRenderTarget(this.resolution.x, this.resolution.y)

	private depthMaterial: MeshDepthMaterial

	private textureMatrix: Matrix4 = new Matrix4()

	private downSampling = 4

	private fsQuad: FullScreenQuad

	public constructor(private scene: Scene, private camera: PerspectiveCamera, private readonly resolution: Vector2) {
		super()

		this.material = new ShaderMaterial({
			defines: Object.assign({}, DepthShader.defines),
			uniforms: DepthShader.uniforms,
			vertexShader: DepthShader.vertexShader,
			fragmentShader: DepthShader.fragmentShader,
			blending: NoBlending,
			depthTest: false,
			depthWrite: false,
		})

		this.fsQuad = new FullScreenQuad(this.material)

		this.depthMaterial = new MeshDepthMaterial()
		this.depthMaterial.side = DoubleSide
		this.depthMaterial.depthPacking = RGBADepthPacking
		this.depthMaterial.blending = NoBlending

		this.depthBuffer = new WebGLRenderTarget(
			this.resolution.x / this.downSampling,
			this.resolution.y / this.downSampling
		)
		this.depthBuffer.texture.name = 'Depth'
		this.depthBuffer.texture.generateMipmaps = false

		this.material.uniforms.cameraNearFar.value.set(this.camera.near, this.camera.far)
		this.material.uniforms.resolution.value = new Vector2(resolution.x, resolution.y)
		this.material.uniforms.cameraWorldMatrix.value = this.camera.matrixWorld
		this.material.uniforms.cameraProjectionMatrixInverse.value = this.camera.projectionMatrixInverse.clone()
	}

	private updateTextureMatrix(): void {
		// prettier-ignore
		this.textureMatrix.set(
			0.5, 0.0, 0.0, 0.5,
			0.0, 0.5, 0.0, 0.5,
			0.0, 0.0, 0.5, 0.5,
			0.0, 0.0, 0.0, 1.0
		)
		this.textureMatrix.multiply(this.camera.projectionMatrix)
		this.textureMatrix.multiply(this.camera.matrixWorldInverse)
	}

	public render(
		renderer: WebGLRenderer,
		writeBuffer: WebGLRenderTarget<Texture>,
		readBuffer: WebGLRenderTarget<Texture>,
		deltaTime: number,
		maskActive: boolean
	): void {
		// render depth texture
		this.scene.overrideMaterial = this.depthMaterial
		renderer.setRenderTarget(this.depthBuffer)
		renderer.render(this.scene, this.camera)
		this.scene.overrideMaterial = null

		if (this.renderToScreen) {
			this.updateTextureMatrix()

			// TODO add shadow map
			this.material.uniforms['colorTexture'].value = readBuffer.texture
			this.material.uniforms['depthTexture'].value = this.depthBuffer.texture
			this.material.uniforms['textureMatrix'].value = this.textureMatrix
			this.material.uniforms['cameraPosition'].value = this.camera.position
			this.material.uniforms['time'].value = (Date.now() - startTime) / 10000

			renderer.setRenderTarget(null)
			renderer.clear()

			this.fsQuad.render(renderer)
		}
	}
}
