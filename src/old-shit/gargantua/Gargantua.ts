import { PerspectiveCamera, ShaderMaterial, Texture, Vector2, WebGLRenderTarget, WebGLRenderer } from 'three'
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js'
import { loadTexture } from './LoadTexture'

import quadVert from './shaders/quad_vert.glsl'

import bufferAfrag from './shaders/bufferA_frag.glsl'
import bufferBfrag from './shaders/bufferB_frag.glsl'
import bufferCfrag from './shaders/bufferC_frag.glsl'
import bufferDfrag from './shaders/bufferD_frag.glsl'

import imagefrag from './shaders/image_frag.glsl'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// TODO add stop render button
// TODO add FPS

export class Gargantua {
	private readonly downsampling = 2.0

	private size = new Vector2()

	private readonly fsQuad = new FullScreenQuad()
	private readonly startTime = Date.now()
	private texture0: Texture
	private texture1: Texture

	private material1 = new ShaderMaterial({
		// TODO add mouse
		uniforms: {
			iTime: { value: 0 },
			iMouse: { value: new Vector2() },
			iResolution: { value: new Vector2() },
			iChannel0: { value: null },
			iChannel1: { value: null },
			iChannel2: { value: null },
			cameraPosition: { value: null },
			cameraWorldMatrix: { value: null },
			cameraProjectionMatrixInverse: { value: null },
		},

		vertexShader: quadVert,
		fragmentShader: bufferAfrag,

		depthTest: false,
		depthWrite: false,
		transparent: true,
	})

	private material2 = new ShaderMaterial({
		uniforms: {
			iResolution: { value: new Vector2() },
			iChannel0: { value: null },
		},

		vertexShader: quadVert,
		fragmentShader: bufferBfrag,

		depthTest: false,
		depthWrite: false,
		transparent: true,
	})

	private material3 = new ShaderMaterial({
		uniforms: {
			iResolution: { value: new Vector2() },
			iChannel0: { value: null },
		},

		vertexShader: quadVert,
		fragmentShader: bufferCfrag,

		depthTest: false,
		depthWrite: false,
		transparent: true,
	})

	private material4 = new ShaderMaterial({
		uniforms: {
			iResolution: { value: new Vector2() },
			iChannel0: { value: null },
		},

		vertexShader: quadVert,
		fragmentShader: bufferDfrag,

		depthTest: false,
		depthWrite: false,
		transparent: true,
	})

	private material5 = new ShaderMaterial({
		uniforms: {
			iResolution: { value: new Vector2() },
			iChannel0: { value: null },
			iChannel1: { value: null },
			iChannel2: { value: null },
			iChannel3: { value: null },
		},

		vertexShader: quadVert,
		fragmentShader: imagefrag,

		depthTest: false,
		depthWrite: false,
		transparent: true,
	})

	private bufferA: WebGLRenderTarget
	private bufferA1: WebGLRenderTarget
	private bufferB: WebGLRenderTarget
	private bufferC: WebGLRenderTarget
	private bufferD: WebGLRenderTarget

	private camera: PerspectiveCamera
	private controls: OrbitControls

	public constructor(private readonly renderer: WebGLRenderer) {
		this.renderer.getSize(this.size.multiplyScalar(1 / this.downsampling))

		this.bufferA = new WebGLRenderTarget(this.size.x / this.downsampling, this.size.y / this.downsampling)
		this.bufferA.texture.name = 'Buffer A'
		this.bufferA.texture.generateMipmaps = false
		this.bufferA1 = new WebGLRenderTarget(this.size.x / this.downsampling, this.size.y / this.downsampling)
		this.bufferA1.texture.name = 'Buffer A1'
		this.bufferA1.texture.generateMipmaps = false
		this.bufferB = new WebGLRenderTarget(this.size.x / this.downsampling, this.size.y / this.downsampling)
		this.bufferB.texture.name = 'Buffer B'
		this.bufferB.texture.generateMipmaps = false
		this.bufferC = new WebGLRenderTarget(this.size.x / this.downsampling, this.size.y / this.downsampling)
		this.bufferC.texture.name = 'Buffer C'
		this.bufferC.texture.generateMipmaps = false
		this.bufferD = new WebGLRenderTarget(this.size.x / this.downsampling, this.size.y / this.downsampling)
		this.bufferD.texture.name = 'Buffer D'
		this.bufferD.texture.generateMipmaps = false

		this.camera = new PerspectiveCamera(45, this.size.x / this.size.y, 0.1, 1000.0)
		this.camera.position.set(0.0, 0.0, -10.0)

		this.controls = new OrbitControls(this.camera, this.renderer.domElement)
		this.controls.autoRotate = true
		this.controls.autoRotateSpeed = -0.1
		this.controls.enableDamping = true
		this.controls.dampingFactor = 0.1
		this.controls.maxDistance = 15.0
		this.controls.minDistance = 5.0
		this.controls.panSpeed = 0.05
		this.controls.rotateSpeed = 0.05
	}

	public async init(): Promise<void> {
		this.texture0 = await loadTexture('assets/textures/noise.png')
		this.texture1 = await loadTexture('assets/textures/wood.jpg')

		this.material1.uniforms.iResolution.value = this.size
		this.material2.uniforms.iResolution.value = this.size
		this.material3.uniforms.iResolution.value = this.size
		this.material4.uniforms.iResolution.value = this.size
		this.material5.uniforms.iResolution.value = this.size

		this.material1.uniforms.cameraWorldMatrix.value = this.camera.matrixWorld
		this.material1.uniforms.cameraProjectionMatrixInverse.value = this.camera.projectionMatrixInverse.clone()
		this.material1.uniforms.cameraPosition.value = this.camera.position
	}

	public setSize(x: number, y: number): void {
		this.size = new Vector2(x, y)

		this.bufferA.setSize(x, y)
		this.bufferB.setSize(x, y)
		this.bufferC.setSize(x, y)
		this.bufferD.setSize(x, y)

		this.material1.uniforms.iResolution.value = this.size
		this.material2.uniforms.iResolution.value = this.size
		this.material3.uniforms.iResolution.value = this.size
		this.material4.uniforms.iResolution.value = this.size
		this.material5.uniforms.iResolution.value = this.size
	}

	public render(): void {
		const time = (Date.now() - this.startTime) / 1000.0

		// TODO update resoluition
		// TODO fix temporat AA
		this.material1.uniforms.iTime.value = time
		this.material1.uniforms.iChannel0.value = this.texture0
		this.material1.uniforms.iChannel1.value = this.texture1
		this.material1.uniforms.iChannel2.value = this.bufferA1.texture
		this.fsQuad.material = this.material1
		this.renderer.setRenderTarget(null)
		this.fsQuad.render(this.renderer)

		// this.material2.uniforms.iChannel0.value = this.bufferA.texture
		// this.fsQuad.material = this.material2
		// this.renderer.setRenderTarget(this.bufferB)
		// this.fsQuad.render(this.renderer)

		// this.material3.uniforms.iChannel0.value = this.bufferB.texture
		// this.fsQuad.material = this.material3
		// this.renderer.setRenderTarget(this.bufferC)
		// this.fsQuad.render(this.renderer)

		// this.material4.uniforms.iChannel0.value = this.bufferC.texture
		// this.fsQuad.material = this.material4
		// this.renderer.setRenderTarget(this.bufferD)
		// this.fsQuad.render(this.renderer)

		// this.material5.uniforms.iChannel0.value = this.bufferA.texture
		// this.material5.uniforms.iChannel1.value = this.bufferB.texture
		// this.material5.uniforms.iChannel2.value = this.bufferC.texture
		// this.material5.uniforms.iChannel3.value = this.bufferD.texture
		// this.fsQuad.material = this.material5
		// this.renderer.setRenderTarget(null)
		// this.fsQuad.render(this.renderer)

		// swap buffer A
		const tmp = this.bufferA1
		this.bufferA1 = this.bufferA
		this.bufferA = tmp

		this.controls.update()
	}
}
