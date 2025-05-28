import { biasedRand, nonBiasedRand } from '@/common/lib'
import {
	AdditiveBlending,
	BufferGeometry,
	Float32BufferAttribute,
	FogExp2,
	NormalBlending,
	Points,
	PointsMaterial,
	Scene,
	Texture,
	TextureLoader,
} from 'three'

export class Particles {
	private readonly SPREAD = 0.8
	private readonly COUNT = 100

	private colors = [0x86baeb, 0xa9f9f1, 0x74fddb, 0x74defd]

	private readonly meshes: Points[] = []

	public static async create(scene: Scene) {
		const map = await new TextureLoader().load('assets/images/bubble.png')
		return new Particles(scene, map)
	}

	private constructor(private readonly scene: Scene, map: Texture) {
		const geometry = new BufferGeometry()

		const vertices: number[] = []
		// this.scene.fog = new FogExp2(0x000000, 0.008)

		for (let i = 0; i < this.colors.length; ++i) {
			const material = new PointsMaterial({
				opacity: 0.5 + 0.15 * Math.random(),
				size: 3 + 10 * Math.random(),
				color: this.colors[i],
				alphaMap: map,
				blending: NormalBlending,
				depthTest: true,
				depthWrite: false,
				transparent: false,
				sizeAttenuation: false,
				fog: false,
			})

			for (let i = 0; i < this.COUNT / this.colors.length; i++) {
				const x = biasedRand() * this.SPREAD
				const y = nonBiasedRand() * this.SPREAD
				const z = biasedRand() * this.SPREAD

				vertices.push(x, y, z)
			}

			geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3))

			this.meshes[i] = new Points(geometry, material)

			this.meshes[i].renderOrder = 4

			this.meshes[i].rotation.y = Math.random() * 6

			this.scene.add(this.meshes[i])
		}
	}

	public update() {
		const time = Date.now() * 0.00001
		for (let i = 0; i < this.meshes.length; i++) {
			const object = this.meshes[i]
			if (object instanceof Points) {
				object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1))
			}
		}
	}
}
