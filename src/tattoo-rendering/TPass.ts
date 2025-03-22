import {
	WebGLRenderer,
	WebGLRenderTarget,
	Texture,
	ShaderMaterial,
	Vector2,
	Scene,
	PerspectiveCamera,
	UniformsUtils,
	AdditiveBlending,
	NormalBlending,
} from 'three'
import { FullScreenQuad, Pass } from 'three/examples/jsm/postprocessing/Pass.js'
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js'

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
			vec4 frame1 = texture2D(smokeBuffer, vUv);
            vec4 frame2 = texture2D(readBuffer, vUv);
			gl_FragColor.rgb = mix(frame1.rgb, frame2.rgb, 0.5) * 1.0;
			gl_FragColor.a = 1.0;
		}`,

	depthTest: false,
	depthWrite: false,
	transparent: true,
})

const COPY_MATERIAL = new ShaderMaterial({
	uniforms: {
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
            gl_FragColor = texture2D(readBuffer, vUv);
		}`,

	depthTest: false,
	depthWrite: false,
	transparent: true,
})

const MIX_MATERIAL = new ShaderMaterial({
	uniforms: {
		readBuffer: { value: null },
		holdBuffer: { value: null },
		mixx: { value: 1 },
	},

	vertexShader: `varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,

	fragmentShader: `varying vec2 vUv;

		uniform sampler2D holdBuffer;
		uniform sampler2D readBuffer;
        uniform float mixx;

		void main() {
			vec4 frame1 = texture2D(holdBuffer, vUv);
            vec4 frame2 = texture2D(readBuffer, vUv);
			gl_FragColor = mix(frame1, frame2, mixx);
			// gl_FragColor.a = 1.0;
			// gl_FragColor = mix(frame1, frame2, mixx);
		}`,

	depthTest: false,
	depthWrite: false,
	transparent: true,
})

export class TPass extends Pass {
	private buffer1: WebGLRenderTarget
	private buffer2: WebGLRenderTarget

	private fsQuad: FullScreenQuad

	private renderCount = 0

	public minFrames = 1

	public maxFrames = 1

	public samplesPerFrame

	public currentFrames = this.minFrames

	public iterations = 32

	private copyUniforms

	private copyShader = CopyShader

	private copyMaterial :	ShaderMaterial

	public constructor(private scene: Scene, private camera: PerspectiveCamera, private readonly resolution: Vector2) {
		super()

		this.copyUniforms = UniformsUtils.clone(this.copyShader.uniforms)

		this.copyMaterial = new ShaderMaterial(	{
			uniforms: this.copyUniforms,
			vertexShader: this.copyShader.vertexShader,
			fragmentShader: this.copyShader.fragmentShader,
			transparent: true,
			depthTest: false,
			depthWrite: false,
			premultipliedAlpha: true,
			blending: NormalBlending
		} );

		this.fsQuad = new FullScreenQuad(this.copyMaterial)

		this.buffer1 = new WebGLRenderTarget(this.resolution.x, this.resolution.y)

		this.buffer2 = new WebGLRenderTarget(this.resolution.x, this.resolution.y)
	}

	public async init() {}

	public increase() {
		this.currentFrames++
		if (this.currentFrames > this.maxFrames) {
			this.currentFrames = this.maxFrames
		}
	}

	public decrease() {
		this.currentFrames -= 100
		if (this.currentFrames < this.minFrames) {
			this.currentFrames = this.minFrames
		}
	}

	public render(
		renderer: WebGLRenderer,
		writeBuffer: WebGLRenderTarget<Texture>,
		readBuffer: WebGLRenderTarget<Texture>,
		deltaTime: number,
		maskActive: boolean
	): void {
		// this.renderCount++

		// const [jitterX, jitterY] = this.getJitter(this.renderCount % 16)
		// renderer.setRenderTarget(readBuffer)

		// this.camera.projectionMatrix.elements[8] = jitterX / this.resolution.x
		// this.camera.projectionMatrix.elements[9] = jitterY / this.resolution.y

		// renderer.render(this.scene, this.camera)

		// renderer.setRenderTarget(this.buffer2)
		// this.fsQuad.material = MATERIAL2
		// MATERIAL2.uniforms.holdBuffer.value = this.buffer1.texture
		// MATERIAL2.uniforms.readBuffer.value = readBuffer.texture
		// MATERIAL2.uniforms.mixx.value = 1 / this.currentFrames
		// this.fsQuad.render(renderer)

		for (let i = 0; i <= this.iterations; ++i) {
			this.renderIteration(renderer, readBuffer)
		}

		if (this.renderToScreen) {
			// this.fsQuad.material = COPY_MATERIAL

			// COPY_MATERIAL.uniforms.readBuffer.value = this.buffer2.texture


			renderer.setRenderTarget(null)

			this.copyUniforms['opacity'].value = 1.0
			this.copyUniforms['tDiffuse'].value = this.buffer2.texture

			renderer.clear()

			this.fsQuad.render(renderer)
		}

		// this.swapBuffers()
	}

	private renderIteration(renderer: WebGLRenderer, readBuffer: WebGLRenderTarget) {
		this.renderCount++

		const [jitterX, jitterY] = this.getJitter(this.renderCount % 64)
		renderer.setRenderTarget(readBuffer)

		this.camera.projectionMatrix.elements[8] = jitterX / this.resolution.x
		this.camera.projectionMatrix.elements[9] = jitterY / this.resolution.y

		renderer.setClearAlpha(1)
		renderer.setClearColor(0x000000)
		renderer.clear()

		renderer.render(this.scene, this.camera)

		// renderer.setRenderTarget(this.buffer2)
		// this.fsQuad.material = MIX_MATERIAL
		// MIX_MATERIAL.uniforms.holdBuffer.value = this.buffer1.texture
		// MIX_MATERIAL.uniforms.readBuffer.value = readBuffer.texture
		// MIX_MATERIAL.uniforms.mixx.value = 1 / 60
		// this.fsQuad.render(renderer)

		const accumulationWeight = 1

		renderer.setRenderTarget(this.buffer2)
		// renderer.setClearAlpha(1)
		// renderer.setClearColor(0x000000)

		// renderer.setClearAlpha(0.1)
		renderer.setClearColor(0x000000, 0.5)
		// renderer.clear()

		// renderer.setRenderTarget(this.buffer2)
		// this.copyUniforms['opacity'].value = 0.84
		// this.copyUniforms['tDiffuse'].value = this.buffer1.texture
		// this.fsQuad.render(renderer)

		this.copyUniforms['opacity'].value = 0.5
		this.copyUniforms['tDiffuse'].value = readBuffer.texture
		this.fsQuad.render(renderer)

		// renderer.setRenderTarget(this.buffer2)
		// this.copyUniforms['opacity'].value = 0.9
		// this.copyUniforms['tDiffuse'].value = this.buffer1.texture
		// this.fsQuad.render(renderer)

		this.swapBuffers()
	}

	private swapBuffers(): void {
		const tmp = this.buffer1
		this.buffer1 = this.buffer2
		this.buffer2 = tmp
	}

	private getJitter(index): [number, number] {
		return [
			(this.halton(index, 2) - 0.5) * 2, // X jitter
			(this.halton(index, 3) - 0.5) * 2, // Y jitter
		]
	}

	private halton(index, base): number {
		let result = 0
		let f = 1 / base
		let i = index
		while (i > 0) {
			result += f * (i % base)
			i = Math.floor(i / base)
			f /= base
		}
		return result
	}
}
