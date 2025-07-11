import * as THREE from 'three'

class Attractor {
	position: THREE.Vector3
	constructor(x: number, y: number, z: number) {
		this.position = new THREE.Vector3(x, y, z)
	}
}

class Branch {
	parent: Branch | null
	position: THREE.Vector3
	direction: THREE.Vector3 = new THREE.Vector3(0, 0, 0)
	originalDir: THREE.Vector3
	count: number = 0

	constructor(pos: THREE.Vector3, dir: THREE.Vector3, parent: Branch | null) {
		this.position = pos.clone()
		this.originalDir = dir.clone()
		this.parent = parent
	}

	next(): Branch {
		const nextPos = this.position.clone().add(this.originalDir.clone().multiplyScalar(0.3))
		return new Branch(nextPos, this.originalDir.clone(), this)
	}

	reset() {
		this.direction.set(0, 0, 0)
		this.count = 0
	}
}

export function generateSpaceColonizationTree({
	attractorCount = 300,
	branchLength = 0.3,
	minDist = 0.3,
	maxDist = 2,
	trunkHeight = 1.5,
} = {}): THREE.Group {
	const tree = new THREE.Group()

	// Generate attractors
	const attractors: Attractor[] = []
	for (let i = 0; i < attractorCount; i++) {
		const a = new Attractor((Math.random() - 0.5) * 4, Math.random() * 5 + trunkHeight, (Math.random() - 0.5) * 4)
		attractors.push(a)
	}

	// Grow initial trunk
	const root = new Branch(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0), null)
	let current = root
	const branches: Branch[] = [root]

	while (!hasAnyAttractorNear(current.position, attractors, maxDist)) {
		const next = current.next()
		branches.push(next)
		current = next
	}

	// Grow branches
	for (let i = 0; i < 150; i++) {
		for (const attractor of attractors) {
			let closest: Branch | null = null
			let closestDist = Infinity

			for (const b of branches) {
				const d = attractor.position.distanceTo(b.position)
				if (d < minDist) {
					attractors.splice(attractors.indexOf(attractor), 1)
					break
				} else if (d < closestDist && d < maxDist) {
					closest = b
					closestDist = d
				}
			}

			if (closest) {
				const dir = attractor.position.clone().sub(closest.position).normalize()
				closest.direction.add(dir)
				closest.count++
			}
		}

		const newBranches: Branch[] = []
		for (const b of branches) {
			if (b.count > 0) {
				const avgDir = b.direction.clone().divideScalar(b.count).normalize()
				const newBranch = new Branch(b.position.clone().add(avgDir.multiplyScalar(branchLength)), avgDir, b)
				newBranches.push(newBranch)
				b.reset()
			}
		}
		branches.push(...newBranches)

		if (newBranches.length === 0) break
	}

	// Render as cylinders
	const mat = new THREE.MeshStandardMaterial({ color: 0xffffff })
	for (const b of branches) {
		if (!b.parent) continue

		const start = b.parent.position
		const end = b.position
		const direction = new THREE.Vector3().subVectors(end, start)
		const length = direction.length()

		const geometry = new THREE.CylinderGeometry(0.02, 0.02, length, 6)
		geometry.translate(0, length / 2, 0) // shift so base is at origin

		const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
		const mesh = new THREE.Mesh(geometry, material)

		// Position and rotate the mesh
		mesh.position.copy(start)

		// Create quaternion that rotates Y-axis to the direction vector
		mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize())

		tree.add(mesh)
	}

	// === Add Flowers at Tips ===
	const flowerMat = new THREE.MeshStandardMaterial({ color: 0xff69b4 })

	const tipPositions = new Set<string>()
	const allPositions = new Set(branches.map((b) => b.position.toArray().toString()))

	// Find tips (no child starts at this position)
	for (const b of branches) {
		if (!branches.some((other) => other.parent === b)) {
			const flowerGeo = new THREE.ConeGeometry(0.05, 0.15, 6)
			const flower = new THREE.Mesh(flowerGeo, flowerMat)

			flower.position.copy(b.position)

			// Random upward rotation
			const randAngle = Math.random() * Math.PI * 2
			flower.rotation.set(-Math.PI / 2, randAngle, 0)

			tree.add(flower)
		}
	}

	return tree
}

function hasAnyAttractorNear(pos: THREE.Vector3, attractors: Attractor[], maxDist: number): boolean {
	return attractors.some((a) => a.position.distanceTo(pos) < maxDist)
}
