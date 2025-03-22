import {
	WebGLRenderer,
	Scene,
	Camera,
	Mesh,
	PerspectiveCamera,
	BoxGeometry,
	MeshPhysicalMaterial,
	PointLight,
	Vector2,
	MeshBasicMaterial,
	Vector3,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass.js'
import { TPass } from './TPass'

let renderer: WebGLRenderer
let scene: Scene
let camera: PerspectiveCamera
let orbitControls: OrbitControls
let composer: EffectComposer
let start = performance.now()
let prevCamPos: Vector3 = new Vector3()
let tPass: TPass
// let taaRenderPass: TAARenderPass
// let index = 0

let frameTime = 0

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

async function init() {
	renderer = new WebGLRenderer({ antialias: true })

	renderer.setSize(window.innerWidth, window.innerHeight)

	renderer.setClearColor(0x000000)

	renderer.setClearAlpha(1.0)

	renderer.autoClear = false

	document.body.appendChild(renderer.domElement)

	scene = new Scene()

	camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000.0)

	camera.position.set(2, 2, 5)

	composer = new EffectComposer(renderer)

	// composer.addPass(new RenderPass(scene, camera))

	tPass = new TPass(scene, camera, new Vector2(window.innerWidth, window.innerHeight))

	composer.addPass(tPass)

	// taaRenderPass = new TAARenderPass(scene, camera, 0x000000, 1)

	// taaRenderPass.sampleLevel = 1

	// composer.addPass(taaRenderPass)

	orbitControls = new OrbitControls(camera, renderer.domElement)

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

// let then = 0
// const fpsCap = 60

async function animate() {
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
		const time = performance.now() - start
		MATERIAL3.userData.shader.uniforms.time.value = time
	}

	if (camera.position.distanceTo(prevCamPos) > 0.001) {
		tPass.decrease()
	} else {
		tPass.increase()
	}

	// renderer.clear()
	composer.render()
	orbitControls.update()

	prevCamPos.copy(camera.position)

	// const delta = performance.now() - frameTime
	// console.log(1000 / delta)

	// frameTime = performance.now()

	// then = Date.now()
	requestAnimationFrame(animate)
}

window.addEventListener('load', async () => {
	await init()
	animate()
})

window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight)
})
