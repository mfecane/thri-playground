import {
	WebGLRenderer,
	Scene,
	Mesh,
	PerspectiveCamera,
	TextureLoader,
	MeshPhysicalMaterial,
	Color,
	Vector2,
	PointLight,
	BoxGeometry,
	MeshBasicMaterial,
	Vector3,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { Renderer } from '@/common/Renderer'
import { TPass } from './TPass'

const bayerDither4x4 = `
    float bayerDither4x4(vec2 uv) {
        int x = int(mod(uv.x * 4.0, 4.0));
        int y = int(mod(uv.y * 4.0, 4.0));
        int index = x + y * 4;
        float dither[16] = float[16](
            0.0,  8.0,  2.0, 10.0,
           12.0,  4.0, 14.0,  6.0,
            3.0, 11.0,  1.0,  9.0,
           15.0,  7.0, 13.0,  5.0
        );
        return dither[index] / 16.0;
    }

	float random2(vec2 uv, float time) {
		return fract(sin(dot(uv + vec2(time * 0.1, time * 0.07), vec2(12.9898 + time * 0.07, 78.233 + time * 0.1))) * 43758.5453);
	}

	float random(vec2 uv) {
		return fract(sin(dot(uv, vec2(12.9898 + time, 78.233 + time / 2.0))) * 43758.5453);
	}

	float random3(vec3 pos) {
		return fract(sin(dot(pos, vec3(127.1, 311.7, 74.7))) * 43758.5453);
	}

	float random4(vec3 pos) {
		pos = fract(pos * 0.3183099 + 0.1); // Spread values evenly
		pos *= 17.0;  
		return fract(pos.x * pos.y * pos.z * (pos.x + pos.y + pos.z));
	}
`

const MATERIAL3 = new MeshPhysicalMaterial({ color: 0x71bbb2, transparent: true, opacity: 0.6 })
MATERIAL3.onBeforeCompile = (shader) => {
	shader.uniforms.time = { value: 0 }

	shader.fragmentShader = `
        uniform float time;
        ${shader.fragmentShader}
    `

	shader.fragmentShader = shader.fragmentShader.replace(`#include <common>`, `#include <common>\n${bayerDither4x4}`)

	// Modify the alpha blending logic
	shader.fragmentShader = shader.fragmentShader.replace(
		`vec4 diffuseColor = vec4( diffuse, opacity );`,
		`vec4 diffuseColor = vec4( diffuse, 1.0 );\n
        float threshold = random4(vec3(gl_FragCoord.xy, time));
        if (threshold > opacity) discard;`
	)

	// console.log('shader.fragmentShader', shader.fragmentShader)

	MATERIAL3.userData.shader = shader
}

export class TemporalRenderer implements Renderer {
	/**
	 * CONSTANTS
	 */

	private SHADOW_MAP_WIDTH = 2048

	private SHADOW_MAP_HEIGHT = 2048

	private COLD_COLOR = new Color(0xc7e3f2)

	public renderer: WebGLRenderer

	/**
	 * COMPOSER
	 */
	public composer: EffectComposer

	//@ts-expect-error
	private renderPass: RenderPass

	//@ts-expect-error
	private outputPass: OutputPass

	//@ts-expect-error
	private tPass: TPass

	//@ts-expect-error
	private orbitControls: OrbitControls

	private textureLoader = new TextureLoader()

	//@ts-expect-error
	private camera: PerspectiveCamera

	private start = performance.now()

	private prevCamPos = new Vector3()

	public constructor() {
		this.renderer = new WebGLRenderer({ antialias: true })

		this.composer = new EffectComposer(this.renderer)
	}

	public async init() {
		this.renderer.setSize(window.innerWidth, window.innerHeight)

		this.renderer.setClearColor(0x000000)

		this.renderer.setClearAlpha(1.0)

		this.renderer.autoClear = false

		document.body.appendChild(this.renderer.domElement)

		const scene = new Scene()

		this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000.0)

		this.camera.position.set(2, 2, 5)

		this.composer = new EffectComposer(this.renderer)

		// composer.addPass(new RenderPass(scene, camera))

		this.tPass = new TPass(scene, this.camera, new Vector2(window.innerWidth, window.innerHeight))

		this.composer.addPass(this.tPass)

		// taaRenderPass = new TAARenderPass(scene, camera, 0x000000, 1)

		// taaRenderPass.sampleLevel = 1

		// composer.addPass(taaRenderPass)

		this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

		const light = new PointLight(0xffffff, 20, 10)
		light.position.set(2.5, 3, 2)

		scene.add(light)

		const geometry = new BoxGeometry(2, 2, 2, 1, 1, 1)

		const material1 = new MeshBasicMaterial({ wireframe: true })
		const material2 = new MeshPhysicalMaterial({
			color: 0xffffff,
			transparent: true,
			opacity: 0.2,
			alphaHash: true,
		})

		const mesh = new Mesh(geometry, MATERIAL3)

		scene.add(mesh)

		const geometry2 = new BoxGeometry(1, 1, 1, 1, 1, 1)

		const material4 = new MeshPhysicalMaterial({ color: 0xcccccc })

		const mesh2 = new Mesh(geometry2, material4)

		scene.add(mesh2)
	}

	public async animate() {
		// const now = Date.now()

		// if (now - then < 1000 / fpsCap) {
		// 	requestAnimationFrame(animate)
		// 	return
		// }

		// index++
		// if (taaRenderPass) {
		// 	if (index % 5 === 0) {
		// 		taaRenderPass.accumulate = false
		// 	} else {
		// 		taaRenderPass.accumulate = true
		// 	}
		// }
		if (MATERIAL3.userData.shader) {
			const time = performance.now() - this.start
			MATERIAL3.userData.shader.uniforms.time.value = time
		}

		if (this.camera.position.distanceTo(this.prevCamPos) > 0.001) {
			this.tPass.decrease()
		} else {
			this.tPass.increase()
		}

		// renderer.clear()
		this.composer.render()
		this.orbitControls.update()

		this.prevCamPos.copy(this.camera.position)

		// const delta = performance.now() - frameTime
		// console.log(1000 / delta)

		// frameTime = performance.now()

		// then = Date.now()
		requestAnimationFrame(async () => await this.animate())
	}

	public async onResize(width: number, height: number) {
		this.renderer.setSize(width, height)
		this.composer.setSize(width, height)
		this.camera.aspect = width / height
		this.camera.updateProjectionMatrix()
	}

	public async destroy() {
		this.renderer.dispose()
	}
}
