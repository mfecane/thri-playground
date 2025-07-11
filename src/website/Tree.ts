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
	depth: number = 0

	constructor(pos: THREE.Vector3, dir: THREE.Vector3, parent: Branch | null) {
		this.position = pos.clone()
		this.originalDir = dir.clone()
		this.parent = parent
		if (parent) {
			this.depth = parent.depth + 1
		}
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

class Tip {
	position: THREE.Vector3 = new THREE.Vector3()
	direction: THREE.Vector3 = new THREE.Vector3()
	depth: number = 0
}

class TreeResult {
	branches: Branch[] = [new Branch(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0), null)]
	group: THREE.Group = new THREE.Group()
	attractors: Attractor[] = []
	originalAttractors: Attractor[] = []
	tips: Tip[] = []
}

export function generateSpaceColonizationTree({ attractorCount = 30, minDist = 0.5, maxDist = 2 } = {}): TreeResult {
	const treeResult = new TreeResult()

	// Attractors
	// const attractors: Attractor[] = []
	for (let i = 0; i < attractorCount; i++) {
		const a = new Attractor((Math.random() - 0.5) * 4, Math.random() * 2 + 0.5, Math.random() * 4)
		treeResult.attractors.push(a)
	}

	treeResult.originalAttractors = [...treeResult.attractors]

	// Trunk
	let current = treeResult.branches[0]

	while (!hasAnyAttractorNear(current.position, treeResult.attractors, maxDist)) {
		const next = current.next()
		treeResult.branches.push(next)
		current = next
	}

	// Main growth loop
	for (let i = 0; i < 150; i++) {
		for (const attractor of [...treeResult.attractors]) {
			let closest: Branch | null = null
			let closestDist = Infinity

			// find closest branch
			for (const b of treeResult.branches) {
				const d = attractor.position.distanceTo(b.position)
				if (d < minDist) {
					treeResult.attractors.splice(treeResult.attractors.indexOf(attractor), 1)
					break
				} else if (d < closestDist && d < maxDist) {
					closest = b
					closestDist = d
				}
			}

			if (closest) {
				const dir = attractor.position.clone().sub(closest.position).normalize()
				closest.direction.add(dir.normalize())
				closest.count++
			}
		}

		const newBranches: Branch[] = []
		for (const b of treeResult.branches) {
			// decreasing length
			const branchLength = 0.2

			console.log('branchLength', branchLength)
			console.log('b.depth', b.depth)

			if (b.count > 0) {
				const avgDir = b.direction.clone().divideScalar(b.count).normalize()
				const newBranch = new Branch(b.position.clone().add(avgDir.multiplyScalar(branchLength)), avgDir, b)
				newBranches.push(newBranch)
				b.reset()
			}
		}
		treeResult.branches.push(...newBranches)

		if (newBranches.length === 0) break
	}

	createBranchMeshes(treeResult)

	// treeResult.tips = treeResult.branches.map(b=>{
	// 	const tip = new Tip()
	// 	tip.position = b.position.clone()
	// 	tip.direction..add(b.direction)
	// 	return 
	// })

	return treeResult
}

function createBranchMeshes(treeResult: TreeResult) {
	// Compute max depth
	const maxDepth = treeResult.branches.reduce((acc, b) => {
		let depth = 0
		let p = b.parent
		while (p) {
			depth++
			p = p.parent
		}
		return Math.max(acc, depth)
	}, 0)

	const mat = new THREE.MeshStandardMaterial({ color: 0x473430 })

	for (const b of treeResult.branches) {
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
		const radius = 0.01 + 0.05 * t * t // thinner overall and near tip

		const geometry = new THREE.CylinderGeometry(radius, radius, length, 6, 1, false)
		geometry.translate(0, length / 2, 0)

		const mesh = new THREE.Mesh(geometry, mat)
		mesh.position.copy(start)
		mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize())

		treeResult.group.add(mesh)
	}
}
