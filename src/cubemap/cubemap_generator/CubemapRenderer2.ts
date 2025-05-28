import {
	AxesHelper,
	BackSide,
	BoxGeometry,
	Camera,
	Color,
	CubeTextureLoader,
	Matrix3,
	Mesh,
	PerspectiveCamera,
	Scene,
	ShaderMaterial,
	UniformsUtils,
	Vector3,
	WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Renderer } from '@/common/Renderer'
import { renderersReposditory } from '@/common/RendererList'
import backgroundVert from './shaders/background_cube.vert.glsl'
import backgroundFrag from './shaders/background_cube.frag.glsl'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import * as dat from 'dat.gui'

const BackgroundCubeShader = {
	uniforms: {
		time: { value: null },
		envMap: { value: null },
		texture3d: { value: null },
		flipEnvMap: { value: -1 },
		backgroundBlurriness: { value: 0 },
		backgroundIntensity: { value: 1 },
		backgroundRotation: { value: /*@__PURE__*/ new Matrix3() },

		baseColor: { value: new Color(0x111111) },
		smokeColor: { value: new Color(0xeeeeee) },
		density: { value: 1.5 },
		speed: { value: 0.2 },
		scale: { value: 0.5 },
		worldDirection: { value: new Vector3(0, 1, 0) }, // Default upward direction
	},

	vertexShader: backgroundVert,
	fragmentShader: backgroundFrag,
}

export class CubemapRenderer2 implements Renderer {
	public renderer = new WebGLRenderer()

	private width = 1024

	private height = 1024

	private camera = new PerspectiveCamera(90, this.width / this.height, 0.1, 1000.0)

	private controls = new OrbitControls(this.camera, this.renderer.domElement)

	private animId: number = -1

	private scene = new Scene()

	private boxMeshMaterial = new ShaderMaterial({
		name: 'BackgroundCubeMaterial',
		uniforms: UniformsUtils.clone(BackgroundCubeShader.uniforms),
		vertexShader: BackgroundCubeShader.vertexShader,
		fragmentShader: BackgroundCubeShader.fragmentShader,
		side: BackSide,
		depthTest: false,
		depthWrite: false,
		fog: false,
	})

	private box = new Mesh(new BoxGeometry(1, 1, 1), this.boxMeshMaterial)

	private camera_px = new PerspectiveCamera(90, 1, 0.1, 1000.0)
	private camera_nx = new PerspectiveCamera(90, 1, 0.1, 1000.0)
	private camera_py = new PerspectiveCamera(90, 1, 0.1, 1000.0)
	private camera_ny = new PerspectiveCamera(90, 1, 0.1, 1000.0)
	private camera_pz = new PerspectiveCamera(90, 1, 0.1, 1000.0)
	private camera_nz = new PerspectiveCamera(90, 1, 0.1, 1000.0)

	private gui: dat.GUI

	public scale = 1.0

	public constructor() {
		this.camera_px.lookAt(-1, 0, 0)

		this.camera_nx.lookAt(1, 0, 0)

		this.camera_py.lookAt(0, 1, 0)
		this.camera_py.rotateOnWorldAxis(new Vector3(0, 1, 0), Math.PI)

		this.camera_ny.lookAt(0, -1, 0)
		this.camera_ny.rotateOnWorldAxis(new Vector3(0, 1, 0), Math.PI)

		this.camera_pz.lookAt(0, 0, 1)

		this.camera_nz.lookAt(0, 0, -1)

		this.gui = new dat.GUI()
		this.gui.add(this, 'scale', 0.0, 6.0)
	}

	public async init() {
		this.renderer.setSize(this.width, this.height)

		document.body.appendChild(this.renderer.domElement)

		this.camera.position.set(0, 2, 2)

		let reflectionCube

		if (0) {
			// initial texture
			const path = 'public/assets/cube/dark-s_'
			const format = '.jpg'
			const urls = [
				path + 'px' + format,
				path + 'nx' + format,
				path + 'py' + format,
				path + 'ny' + format,
				path + 'pz' + format,
				path + 'nz' + format,
			]
			reflectionCube = new CubeTextureLoader().load(urls)
		} else {
			// rendered texture
			const path = 'assets/cube/02/background_'
			const format = '.png'
			const urls = [
				path + 'px' + format,
				path + 'nx' + format,
				path + 'py' + format,
				path + 'ny' + format,
				path + 'pz' + format,
				path + 'nz' + format,
			]
			reflectionCube = new CubeTextureLoader().load(urls)
		}

		// box for cusom background rendering
		this.box.geometry.deleteAttribute('normal')
		this.box.geometry.deleteAttribute('uv')
		this.box.onBeforeRender = function (renderer, scene, camera) {
			this.matrixWorld.copyPosition(camera.matrixWorld)
		}
		this.scene.add(this.box)

		this.scene.background = reflectionCube

		this.scene.add(new AxesHelper())

		//@ts-expect-error
		window.captureAndDownload = this.captureAndDownload.bind(this)
	}

	public async animate(): Promise<void> {

		this.boxMeshMaterial.uniforms.scale.value = this.scale

		this.renderer.render(this.scene, this.camera)
		this.controls.update()
		this.animId = requestAnimationFrame(async () => await this.animate())
	}

	public async onResize(width: number, height: number): Promise<void> {
		this.width = width
		this.height = height
		this.renderer.setSize(this.width, this.height)
		this.camera.aspect = this.width / this.height
		this.camera.updateProjectionMatrix()
	}

	private async renderToImage(camera: Camera, key: string) {
		return await new Promise<{ data: string; name: string }>((resolve) => {
			this.renderer.render(this.scene, camera)
			const imageData = this.renderer.domElement.toDataURL('image/png')
			resolve({
				data: imageData,
				name: `background_${key}.png`,
			})
		})
	}

	// render cube map from cameras
	public async captureAndDownload() {
		// pause loop
		cancelAnimationFrame(this.animId)
		this.renderer.setSize(1024, 1024)

		const zip = new JSZip()
		const images: {
			data: string
			name: string
		}[] = []

		for (let key of ['px', 'nx', 'py', 'ny', 'pz', 'nz']) {
			//@ts-expect-error
			const camera: Camera = this[`camera_${key}`]
			images.push(await this.renderToImage(camera, key))
		}

		images.forEach((image, index) => {
			// const data = image.data.replace(/^data:image\/\w+;base64,/, '')
			console.log('image.data', image.data)
			zip.file(image.name, image.data.split(',')[1], { base64: true })
		})

		const content = await zip.generateAsync({ type: 'blob' })
		saveAs(content, 'scene_views.zip')

		// restart loop
		this.animId = requestAnimationFrame(async () => await this.animate())
		this.renderer.setSize(this.width, this.height)
	}

	public async destroy(): Promise<void> {
		cancelAnimationFrame(this.animId)
		this.renderer.dispose()
		this.renderer.domElement.remove()
		this.gui.destroy()
	}
}

renderersReposditory.register('CubemapRenderer2', CubemapRenderer2, 'CubemapRenderer', '')
