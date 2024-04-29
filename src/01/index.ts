import {
	BoxGeometry,
	Mesh,
	MeshStandardMaterial,
	PCFShadowMap,
	PerspectiveCamera,
	PlaneGeometry,
	PointLight,
	Scene,
	Vector3,
	WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader.js'

let renderer: WebGLRenderer,
	scene: Scene,
	camera: PerspectiveCamera,
	controls: OrbitControls,
	light: PointLight,
	composer: EffectComposer

function animate() {
	requestAnimationFrame(animate)

	let time = performance.now() * 0.002

	light.position.x = Math.sin(time * 0.8) * 1
	light.position.y = 2
	light.position.z = Math.cos(time * 0.8) * 1

	composer.render()
	controls.update()
}

function init() {
	renderer = new WebGLRenderer()
	renderer.shadowMap.enabled = true
	renderer.shadowMap.type = PCFShadowMap

	scene = new Scene()
	camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

	light = new PointLight(0xffc9b8, 1.0, 20)
	light.position.set(0, 2, 0)
	light.castShadow = true
	scene.add(light)

	addCube(scene)
	addPlane(scene)

	camera.position.set(0, 1, 4)
	controls = new OrbitControls(camera, renderer.domElement)

	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	composer = new EffectComposer(renderer)
	composer.addPass(new RenderPass(scene, camera))
	composer.addPass(new ShaderPass(GammaCorrectionShader))
}

function addCube(scene: Scene) {
	const cube = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color: 0xffffff }))
	cube.castShadow = true
	cube.receiveShadow = true
	scene.add(cube)
}

function addPlane(scene: Scene) {
	const plane = new Mesh(new PlaneGeometry(4, 4), new MeshStandardMaterial({ color: 0xcccccc }))
	plane.rotateOnAxis(new Vector3(1, 0, 0), -Math.PI / 2)
	plane.position.set(0, -0.5, 0)
	plane.receiveShadow = true
	scene.add(plane)
}

window.addEventListener('load', () => {
	init()
	animate()
})
