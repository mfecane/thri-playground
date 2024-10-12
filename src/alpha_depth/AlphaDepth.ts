import {
	AlwaysStencilFunc,
	AmbientLight,
	BackSide,
	BufferGeometry,
	DirectionalLight,
	EqualStencilFunc,
	Mesh,
	MeshBasicMaterial,
	MeshStandardMaterial,
	NeverStencilFunc,
	NotEqualStencilFunc,
	PerspectiveCamera,
	PlaneGeometry,
	ReplaceStencilOp,
	Scene,
	Texture,
	TextureLoader,
	Vector3,
	WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

export class AlphaDepth {
	public renderer = new WebGLRenderer({ stencil: true })

	private scene = new Scene()

	private camera = new PerspectiveCamera(45, this.width / this.height, 0.1, 1000.0)

	private orbitControls = new OrbitControls(this.camera, this.renderer.domElement)

	private start = Date.now()

	public static async create(width: number, height: number) {
		const model1 = await new FBXLoader().loadAsync('assets/3d-models/test.fbx')
		const model2 = await new FBXLoader().loadAsync('assets/3d-models/side.fbx')

		const texture = await new TextureLoader().loadAsync('assets/3d-models/Color.png')

		//@ts-expect-error fuck off
		const geometry1: BufferGeometry = model1.children[0].geometry

		//@ts-expect-error fuck off
		const geometry2: BufferGeometry = model2.children[0].geometry

		geometry1.scale(0.015, 0.015, 0.015)
		geometry1.translate(-0.5, 0.5, 0)

		geometry2.scale(0.015, 0.015, 0.015)
		geometry2.translate(-0.5, 0.5, 0)

		return new AlphaDepth(width, height, geometry1, geometry2, texture)
	}

	private constructor(
		private width: number,
		private height: number,
		geometry1: BufferGeometry,
		geometry2: BufferGeometry,
		texture: Texture
	) {
		this.renderer.setSize(this.width, this.height)

		const mesh0 = new Mesh(
			geometry1,
			new MeshBasicMaterial({
				side: BackSide,
				colorWrite: false,
				stencilWrite: true,
				stencilRef: 1,
				stencilFunc: AlwaysStencilFunc,
				stencilFail: ReplaceStencilOp,
				stencilZFail: ReplaceStencilOp,
				stencilZPass: ReplaceStencilOp,
			})
		)
		mesh0.renderOrder = 1
		this.scene.add(mesh0)

		const mesh1 = new Mesh(
			geometry1,
			new MeshStandardMaterial({
				map: texture,
				transparent: true,
				stencilWrite: true,
				stencilRef: 1,
				stencilFunc: EqualStencilFunc,
				stencilFail: ReplaceStencilOp,
				stencilZFail: ReplaceStencilOp,
				stencilZPass: ReplaceStencilOp,
			})
		)
		mesh1.renderOrder = 2
		mesh1.onAfterRender = function (renderer) {
			renderer.clearStencil()
		}
		this.scene.add(mesh1)

		this.camera.position.set(2, 2, 5)
		this.orbitControls.target = new Vector3(0, 1, 0)

		// this.scene.add(new AxesHelper())

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
		this.width = innerWidth
		this.height = innerHeight
		this.renderer.setSize(this.width, this.height)
	}
}
