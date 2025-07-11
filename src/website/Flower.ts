import * as THREE from 'three'

export function createSakuraFlower(): THREE.Group {
	const flower = new THREE.Group()
	const petalGeometry = createPetalGeometry()
	const petalMaterial = new THREE.MeshStandardMaterial({
		vertexColors: true,
		side: THREE.DoubleSide,
		roughness: 0.7,
		metalness: 0.05,
	})

	for (let i = 0; i < 5; i++) {
		const petal = new THREE.Mesh(petalGeometry, petalMaterial)
		const angle = (i / 5) * Math.PI * 2
		petal.rotation.z = angle
		petal.rotation.x = Math.PI
		flower.add(petal)
	}

	const pistilMat = new THREE.MeshStandardMaterial({ color: 0xffd966 })
	const pistilCount = 25

	for (let i = 0; i < pistilCount; i++) {
		const angle = (i / pistilCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4
		const baseRadius = 0.01 + Math.random() * 0.01

		// 💠 Slight positional jitter in radial base placement
		const jitter = new THREE.Vector2((Math.random() - 0.5) * 0.003, (Math.random() - 0.5) * 0.003)

		const base = new THREE.Vector3(Math.cos(angle) * baseRadius + jitter.x, Math.sin(angle) * baseRadius + jitter.y, 0)

		const outward = base.clone().normalize()

		// 💫 Apply stronger bend with greater offset
		const bendAmount = 0.08 + Math.random() * 0.03
		const zScale = 0.2 + Math.random() * 0.05

		const mid = base
			.clone()
			.add(new THREE.Vector3(0, 0, zScale * 0.5).add(outward.clone().multiplyScalar(bendAmount * 0.6)))

		const tip = base.clone().add(new THREE.Vector3(0, 0, zScale).add(outward.clone().multiplyScalar(bendAmount)))

		const curve = new THREE.CatmullRomCurve3([base, mid, tip])
		const geom = new THREE.TubeGeometry(curve, 10, 0.0025, 6, false)
		const mesh = new THREE.Mesh(geom, pistilMat)

		flower.add(mesh)
	}

	return flower
}

function createPetalGeometry(): THREE.BufferGeometry {
	const shape = new THREE.Shape()

	const y1 = 0.1,
		y2 = 0.3,
		y3 = 0.3
	const x1 = 0.08,
		x2 = 0.25

	shape.moveTo(0, 0)
	shape.bezierCurveTo(-x1, y1, -x2, y2, 0, y3)
	shape.bezierCurveTo(x2, y2, x1, y1, 0, 0)

	const geom = new THREE.ShapeGeometry(shape, 32)

	const pos = geom.attributes.position as THREE.BufferAttribute
	const color = new Float32Array(pos.count * 3)

	for (let i = 0; i < pos.count; i++) {
		const y = pos.getY(i)

		// WAY stronger bend near the center
		const bend = (0.25 - Math.pow(y / y3 + 0.5, 2)) * 0.05
		pos.setZ(i, bend)

		// Vibrant gradient: deep pink base → white tip
		const t = y / y3
		const r = 1.0
		const g = 0.4 + 0.6 * t
		const b = 0.4 + 0.6 * t

		color[i * 3 + 0] = r
		color[i * 3 + 1] = g
		color[i * 3 + 2] = b
	}

	pos.needsUpdate = true
	geom.setAttribute('color', new THREE.BufferAttribute(color, 3))
	geom.computeVertexNormals()

	return geom
}
