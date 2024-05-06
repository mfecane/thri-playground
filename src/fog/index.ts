import {
	AmbientLight,
	AxesHelper,
	BoxGeometry,
	CameraHelper,
	Color,
	DirectionalLight,
	DirectionalLightHelper,
	Mesh,
	MeshStandardMaterial,
	PCFShadowMap,
	PerspectiveCamera,
	PlaneGeometry,
	PointLight,
	Scene,
	Vector2,
	Vector3,
	WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader.js'
import { IShatMyselfPass } from './IShatMyselfPass'
import { Stats } from '../Stats'

//@ts-ignore fuck off
import * as dat from 'dat.gui'

let renderer: WebGLRenderer,
	scene: Scene,
	camera: PerspectiveCamera,
	controls: OrbitControls,
	light: DirectionalLight,
	composer: EffectComposer,
	stats: Stats,
	passs: IShatMyselfPass

async function animate() {
	// await new Promise((resolve) => setTimeout(resolve, 200))

	requestAnimationFrame(animate)

	stats.begin()

	let time = performance.now() * 0.002

	light.position.x = Math.sin(time * 0.1) * 2.0
	light.position.y = 2.0
	light.position.z = Math.cos(time * 0.1) * 2.0

	composer.render()
	controls.update()

	stats.end()
}

function init() {
	renderer = new WebGLRenderer()
	renderer.shadowMap.enabled = true
	renderer.shadowMap.type = PCFShadowMap

	scene = new Scene()
	scene.background = new Color(0.05, 0.05, 0.07)
	camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

	addCube(scene)
	addPlane(scene)
	addLight(scene)

	camera.position.set(-3, 1, 3)
	controls = new OrbitControls(camera, renderer.domElement)

	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	composer = new EffectComposer(renderer)
	composer.addPass(new RenderPass(scene, camera))
	// composer.addPass(new ShaderPass(GammaCorrectionShader))
	passs = new IShatMyselfPass(scene, camera, new Vector2(window.innerWidth, window.innerHeight), light)
	passs.init()
	composer.addPass(passs)

	// const ah = new AxesHelper()
	// scene.add(ah)

	stats = new Stats()
	document.body.appendChild(stats.container)
}

function addCube(scene: Scene) {
	const cube = new Mesh(new BoxGeometry(1, 1.0, 1), new MeshStandardMaterial({ color: 0xffffff }))
	cube.castShadow = true
	cube.receiveShadow = true
	cube.position.set(0.0, 0.5, 0.0)
	scene.add(cube)
}

function addPlane(scene: Scene) {
	const plane = new Mesh(new PlaneGeometry(4, 4), new MeshStandardMaterial({ color: 0xcccccc }))
	plane.rotateOnAxis(new Vector3(1, 0, 0), -Math.PI / 2)
	plane.position.set(0, -0.5, 0)
	plane.receiveShadow = true
	scene.add(plane)
}

function addLight(scene: Scene) {
	light = new DirectionalLight(0xe6f6ff, 1.0)
	light.position.set(0, 2, 0)

	light.castShadow = true
	light.shadow.camera.near = 0.1
	light.shadow.camera.far = 6.0
	light.shadow.camera.top = 2.0
	light.shadow.camera.bottom = -2.0
	light.shadow.camera.left = -2.0
	light.shadow.camera.right = 2.0

	scene.add(light)

	scene.add(new AmbientLight(0xffeae6, 0.1))

	// const sh = new DirectionalLightHelper(light)
	// scene.add(sh)
	// const sh2 = new CameraHelper(light.shadow.camera)
	// scene.add(sh2)
}

window.addEventListener('load', () => {
	init()
	animate()

	const gui = new dat.GUI()
	gui.add(passs, 'scale2', 0.0, 10.0)
	gui.add(passs, 'scale3', 0.0, 1.0)
})
