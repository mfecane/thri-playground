import { WebGLRenderer, WebGLRenderTarget, Texture, ShaderMaterial, Vector2, Scene, PerspectiveCamera } from 'three'
import { FullScreenQuad, Pass } from 'three/examples/jsm/postprocessing/Pass.js'

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

const MATERIAL2 = new ShaderMaterial({
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
			gl_FragColor.rgb = mix(frame1.rgb, frame2.rgb, mixx);
			gl_FragColor.a = 1.0;
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

	public minFrames = 3

	public maxFrames = 80

	public currentFrames = this.minFrames

	public constructor(private scene: Scene, private camera: PerspectiveCamera, private readonly resolution: Vector2) {
		super()

		this.fsQuad = new FullScreenQuad()

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
		this.currentFrames -= 5
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
		this.renderCount++

		const [jitterX, jitterY] = this.getJitter(this.renderCount % 16)

		this.camera.projectionMatrix.elements[8] = jitterX / this.resolution.x
		this.camera.projectionMatrix.elements[9] = jitterY / this.resolution.y

		renderer.setRenderTarget(this.buffer2)
		this.fsQuad.material = MATERIAL2
		MATERIAL2.uniforms.holdBuffer.value = this.buffer1.texture
		MATERIAL2.uniforms.readBuffer.value = readBuffer.texture
		MATERIAL2.uniforms.mixx.value = 1 / this.currentFrames
		this.fsQuad.render(renderer)

		if (this.renderToScreen) {
			this.fsQuad.material = COPY_MATERIAL

			COPY_MATERIAL.uniforms.readBuffer.value = this.buffer2.texture

			renderer.setRenderTarget(null)
			renderer.clear()

			this.fsQuad.render(renderer)
		}

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
