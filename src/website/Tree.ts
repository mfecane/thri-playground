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

function hasAnyAttractorNear(pos: THREE.Vector3, attractors: Attractor[], maxDist: number): boolean {
	return attractors.some((a) => a.position.distanceTo(pos) < maxDist)
}

export function generateSpaceColonizationTree({
	attractorCount = 100,
	branchLength = 0.1,
	minDist = 0.3,
	maxDist = 2,
	trunkHeight = 1.5,
	tipMesh = null as THREE.Mesh | null,
} = {}): THREE.Group {
	const tree = new THREE.Group()

	// Attractors
	const attractors: Attractor[] = []
	for (let i = 0; i < attractorCount; i++) {
		const a = new Attractor(
			(Math.random() - 0.3) * 4,
			Math.random() * 2 + trunkHeight,
			(Math.random() - 0.3) * 4
		)
		attractors.push(a)
	}

	// Trunk
	const root = new Branch(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0), null)
	let current = root
	const branches: Branch[] = [root]

	while (!hasAnyAttractorNear(current.position, attractors, maxDist)) {
		const next = current.next()
		branches.push(next)
		current = next
	}

	// Main growth loop
	for (let i = 0; i < 150; i++) {
		for (const attractor of [...attractors]) {
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
				dir.x -= 0.3 // bias toward -X direction
				closest.direction.add(dir.normalize())
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

	// Compute max depth
	const maxDepth = branches.reduce((acc, b) => {
		let depth = 0
		let p = b.parent
		while (p) {
			depth++
			p = p.parent
		}
		return Math.max(acc, depth)
	}, 0)

	const mat = new THREE.MeshStandardMaterial({ color: 0x473430 })

	for (const b of branches) {
		if (!b.parent) continue

		const start = b.parent.position
		const end = b.position
		const direction = new THREE.Vector3().subVectors(end, start)
		const length = direction.length()

		// Depth-based thickness
		let depth = 0
		let p = b
		while (p.parent) {
			depth++
			p = p.parent
		}
		const t = 1 - depth / maxDepth
		const radius = 0.01 + 0.005 * t * t // thinner overall and near tip

		const geometry = new THREE.CylinderGeometry(radius, radius, length, 6, 1, false)
		geometry.translate(0, length / 2, 0)

		const mesh = new THREE.Mesh(geometry, mat)
		mesh.position.copy(start)
		mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize())

		tree.add(mesh)

		// Optional tip decoration
		const isTip = !branches.some((other) => other.parent === b)
		if (isTip && tipMesh) {
			const leaf = tipMesh.clone()
			leaf.position.copy(end)
			leaf.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize())
			tree.add(leaf)
		}
	}

	return tree
}
