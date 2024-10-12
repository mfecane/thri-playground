import {
	AmbientLight,
	AxesHelper,
	DirectionalLight,
	Light,
	Mesh,
	MeshBasicMaterial,
	MeshStandardMaterial,
	PerspectiveCamera,
	PlaneGeometry,
	Scene,
	ShaderMaterial,
	Texture,
	TextureLoader,
	Vector3,
	WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

const mat = new ShaderMaterial({
	uniforms: {
		map: { value: null },
	},

	vertexShader: [
		'varying vec2 vUv;',

		'void main() {',

		'	vUv = vec2( uv.x, uv.y );',
		'	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

		'}',
	].join('\n'),

	fragmentShader: [
		`
		uniform sampler2D map;
		varying vec2 vUv;

		void main() {

			vec2 uv = vUv;

			gl_FragColor = texture2D( map, uv );
			// gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);

		}
	`,
	].join('\n'),
})

export class AlphaDepth {
	public renderer = new WebGLRenderer()

	private scene = new Scene()

	private camera = new PerspectiveCamera(45, this.width / this.height, 0.1, 1000.0)

	private orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

	public static async create(width: number, height: number) {
		const model = await new FBXLoader().loadAsync('assets/3d-models/test.fbx')
		const texture = await new TextureLoader().loadAsync('assets/3d-models/Grayscale.png')
		//@ts-expect-error fuck off
		const mesh: Mesh = model.children[0]
		mesh.geometry.scale(0.015, 0.015, 0.015)
		mesh.geometry.translate(-0.5, 0.5, 0)
		mesh.material = new MeshStandardMaterial({ color: 0xffffff, map: texture })
		return new AlphaDepth(width, height, mesh, texture)
	}

	private constructor(private width: number, private height: number, private mesh: Mesh, private texture: Texture) {
		this.renderer.setSize(this.width, this.height)

		mesh.material = mat
		mat.uniforms.map.value = this.texture
		this.scene.add(mesh)

		this.camera.position.set(2, 2, 5)
		this.orbitControls.target = new Vector3(0, 1, 0)

		this.scene.add(new AxesHelper())

		const light = new DirectionalLight(0xffffff, 1)
		light.position.set(2, 5, 2)
		light.lookAt(new Vector3(0, 0, 0))
		this.scene.add(light)
		this.scene.add(new AmbientLight(0xffffff, 0.01))

		const plane = new Mesh(new PlaneGeometry(1000, 1000), new MeshStandardMaterial({ color: 0x666666 }))
		plane.lookAt(new Vector3(0, 1, 0))
		this.scene.add(plane)
	}

	public render() {
		this.orbitControls.update()
		this.renderer.render(this.scene, this.camera)
	}

	public resize(innerWidth: number, innerHeight: number) {
		this.width = innerHeight
		this.height = innerHeight
		this.renderer.setSize(this.width, this.height)
	}
}
