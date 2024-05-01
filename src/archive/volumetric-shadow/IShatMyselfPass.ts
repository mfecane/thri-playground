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
	DirectionalLight,
	Vector3,
	AdditiveBlending,
} from 'three'
import { FullScreenQuad, Pass } from 'three/examples/jsm/postprocessing/Pass.js'

import depthVert from './shaders/depth_vert.glsl'
import depthFrag from './shaders/depth_frag.glsl'

let startTime = Date.now()

const SmokeShader = {
	name: 'DepthShader',

	defines: {
		DEPTH_PACKING: 1,
		PERSPECTIVE_CAMERA: 1,
		USE_SHADOWMAP: 1,
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

		// light
		shadowMap: { value: null },
		directionalShadowMatrix: { value: null },
	},

	vertexShader: depthVert,

	fragmentShader: depthFrag,
}

const OVERLAY_MATERIAL = new ShaderMaterial({
	uniforms: {
		smokeBuffer: { value: null },
		readBuffer: { value: null },
	},

	vertexShader: `varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,

	fragmentShader: `varying vec2 vUv;

		uniform sampler2D smokeBuffer;
		uniform sampler2D readBuffer;

		void main() {
			gl_FragColor = vec4(texture2D(readBuffer, vUv).rgb + texture2D(smokeBuffer, vUv).rgb, 1.0);
		}`,

	// blending: AdditiveBlending,
	depthTest: false,
	depthWrite: false,
	transparent: true,
})

export class IShatMyselfPass extends Pass {
	private depthMaterial: MeshDepthMaterial
	private smokeMaterial: ShaderMaterial

	private depthBuffer: WebGLRenderTarget
	private someBuffer: WebGLRenderTarget

	private downSampling = 2

	private fsQuad: FullScreenQuad

	public constructor(
		private scene: Scene,
		private camera: PerspectiveCamera,
		private readonly resolution: Vector2,
		private readonly light: DirectionalLight
	) {
		super()

		this.fsQuad = new FullScreenQuad()

		this.depthMaterial = new MeshDepthMaterial()
		this.depthMaterial.side = DoubleSide
		this.depthMaterial.depthPacking = RGBADepthPacking
		this.depthMaterial.blending = NoBlending

		this.smokeMaterial = new ShaderMaterial({
			defines: Object.assign({}, SmokeShader.defines),
			uniforms: SmokeShader.uniforms,
			vertexShader: SmokeShader.vertexShader,
			fragmentShader: SmokeShader.fragmentShader,
			blending: NoBlending,
			depthTest: false,
			depthWrite: false,
		})

		this.smokeMaterial.uniforms.cameraNearFar.value.set(this.camera.near, this.camera.far)
		this.smokeMaterial.uniforms.resolution.value = new Vector2(
			resolution.x / this.downSampling,
			resolution.y / this.downSampling
		)
		this.smokeMaterial.uniforms.cameraWorldMatrix.value = this.camera.matrixWorld
		this.smokeMaterial.uniforms.cameraProjectionMatrixInverse.value = this.camera.projectionMatrixInverse.clone()

		this.depthBuffer = new WebGLRenderTarget(
			this.resolution.x / this.downSampling,
			this.resolution.y / this.downSampling
		)
		this.depthBuffer.texture.name = 'Depth'
		this.depthBuffer.texture.generateMipmaps = false

		this.someBuffer = new WebGLRenderTarget(
			this.resolution.x / this.downSampling,
			this.resolution.y / this.downSampling
		)
		this.someBuffer.texture.name = 'Some buffer'
		this.someBuffer.texture.generateMipmaps = false
	}

	public render(
		renderer: WebGLRenderer,
		writeBuffer: WebGLRenderTarget<Texture>,
		readBuffer: WebGLRenderTarget<Texture>,
		deltaTime: number,
		maskActive: boolean
	): void {
		//#region render depth

		renderer.setRenderTarget(this.depthBuffer)
		this.scene.overrideMaterial = this.depthMaterial
		renderer.render(this.scene, this.camera)
		this.scene.overrideMaterial = null

		//#endregion render depth

		// I think i can do all of this in one step with 2 draw calls, do i?

		//#region render smoke

		this.smokeMaterial.uniforms['depthTexture'].value = this.depthBuffer.texture
		this.smokeMaterial.uniforms['cameraPosition'].value = this.camera.position
		this.smokeMaterial.uniforms['time'].value = (Date.now() - startTime) / 10000

		this.smokeMaterial.uniforms['shadowMap'].value = this.light.shadow.map.texture
		this.smokeMaterial.uniforms['directionalShadowMatrix'].value = this.light.shadow.matrix

		this.fsQuad.material = this.smokeMaterial
		renderer.setRenderTarget(this.someBuffer)
		renderer.clear()
		this.fsQuad.render(renderer)

		//#endregion render smoke

		if (this.renderToScreen) {
			this.fsQuad.material = OVERLAY_MATERIAL

			OVERLAY_MATERIAL.uniforms.readBuffer.value = readBuffer.texture
			OVERLAY_MATERIAL.uniforms.smokeBuffer.value = this.someBuffer.texture

			renderer.setRenderTarget(null)
			renderer.clear()
			this.fsQuad.render(renderer)
		}
	}
}
