import {
	WebGLRenderer,
	Scene,
	Shape,
	Camera,
	MeshBasicMaterial,
	ExtrudeGeometry,
	Mesh,
	PerspectiveCamera,
	AxesHelper,
	TextureLoader,
	ExtrudeGeometryOptions,
	MeshStandardMaterial,
} from 'three'
import { Stats } from '../../shared/Stats'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let renderer: WebGLRenderer, stats: Stats
let scene: Scene
let camera: Camera
let orbitControls: OrbitControls

async function animate() {
	renderer.render(scene, camera)
	orbitControls.update()
	requestAnimationFrame(animate)
}

async function init() {
	renderer = new WebGLRenderer({ antialias: true })

	renderer.setSize(window.innerWidth, window.innerHeight)

	document.body.appendChild(renderer.domElement)

	scene = new Scene()

	camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000.0)

	camera.position.set(2, 2, 5)

	orbitControls = new OrbitControls(camera, renderer.domElement)

	const length = 2,
		width = 2

	const shape = new Shape()
	shape.moveTo(0, 0)
	shape.lineTo(0, width)
	shape.lineTo(length, width)
	shape.lineTo(length, 0)
	shape.lineTo(0, 0)

	const extrudeSettings: ExtrudeGeometryOptions = {
		steps: 1,
		depth: 2,
		bevelEnabled: false,
	}

	const geometry = new ExtrudeGeometry(shape, extrudeSettings)
	const material = new MeshStandardMaterial({ color: 0xffffff, wireframe: false })
	const material2 = new MeshBasicMaterial({
		color: 0xffffff,
		wireframe: true,
		polygonOffset: true,
		polygonOffsetFactor: 1,
		polygonOffsetUnits: 1,
	})

	material.map = await new TextureLoader().loadAsync('assets/textures/checker.webp')

	const mesh = new Mesh(geometry, material)
	const mesh2 = new Mesh(geometry, material2)

	const ah = new AxesHelper()

	scene.add(ah)

	scene.add(mesh)

	scene.add(mesh2)
}

window.addEventListener('load', async () => {
	await init()
	animate()
})

window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight)
})
