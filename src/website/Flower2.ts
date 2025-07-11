import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

const loader = new OBJLoader()

export async function createSakuraFlower2(): Promise<THREE.Group> {
	const flower = new THREE.Group()
	await createPetals(flower)
	await createPistils(flower)
	return flower
}

async function createPetals(flower: THREE.Group<THREE.Object3DEventMap>) {
	const geometry = await loadPetalGeometry()

	geometry.computeBoundingBox()

	const pos = geometry.attributes.position
	const colorAttr = new THREE.BufferAttribute(new Float32Array(pos.count * 3), 3)

	const tempVec = new THREE.Vector3()
	const maxZ = geometry.boundingBox?.max.z ?? 0

	for (let i = 0; i < pos.count; i++) {
		tempVec.fromBufferAttribute(pos, i)
		const t = tempVec.z / maxZ
		const { r, g, b } = mixColor(new THREE.Color(0xcc0000), new THREE.Color(0xffffff), 1 - Math.pow(1 - t, 2))
		colorAttr.setXYZ(i, r, g, b)
	}

	geometry.setAttribute('color', colorAttr)
	const petalMaterial = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, vertexColors: true })

	for (let i = 0; i < 5; i++) {
		const petal = new THREE.Mesh(geometry, petalMaterial)
		const angle = (i / 5) * Math.PI * 2
		petal.rotation.y = angle
		flower.add(petal)
	}
}

async function createPistils(flower: THREE.Group<THREE.Object3DEventMap>) {
	const geometry = await loadPistilGeometry()

	geometry.computeBoundingBox()

	const pos = geometry.attributes.position
	const colorAttr = new THREE.BufferAttribute(new Float32Array(pos.count * 3), 3)

	const tempVec = new THREE.Vector3()
	const maxY = geometry.boundingBox?.max.y ?? 0

	for (let i = 0; i < pos.count; i++) {
		tempVec.fromBufferAttribute(pos, i)
		const t = tempVec.y / maxY

		const { r, g, b } = mixColor(new THREE.Color(0xffff99), new THREE.Color(0xcc0000), t * t)

		colorAttr.setXYZ(i, r, g, b)

		const y = tempVec.y
		const x = tempVec.x + Math.sqrt(y) * 0.2
		const z = tempVec.z + Math.sqrt(y) * 0.2 * 0.1
		pos.setXYZ(i, x, y, z)
	}

	geometry.setAttribute('color', colorAttr)
	const petalMaterial = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, vertexColors: true })

	const pc = 24
	for (let i = 0; i < pc; i++) {
		const petal = new THREE.Mesh(geometry, petalMaterial)
		const angle = (i / pc) * Math.PI * 2
		petal.rotateZ(0.2 - Math.random() * 0.8)
		petal.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), angle)
		petal.scale.y = 0.7 + Math.random() * 0.3
		flower.add(petal)
	}
}

async function loadPetalGeometry() {
	const group = await loader.loadAsync('assets/3d-models/petal.obj')
	//@ts-expect-error fuck off
	return group.children[0].geometry as THREE.BufferGeometry
}

async function loadPistilGeometry() {
	const group = await loader.loadAsync('assets/3d-models/pistil.obj')
	//@ts-expect-error fuck off
	return group.children[0].geometry as THREE.BufferGeometry
}

function mixColor(color1: THREE.Color, color2: THREE.Color, t: number) {
	return {
		r: color1.r * (1 - t) + color2.r * t,
		g: color1.g * (1 - t) + color2.g * t,
		b: color1.b * (1 - t) + color2.b * t,
	}
}
