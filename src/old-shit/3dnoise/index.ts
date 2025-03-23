import { Noise3D } from './Noise3D'

let noise3d: Noise3D

async function animate() {
	requestAnimationFrame(animate)
	noise3d.render()
}

async function init() {
	// const size = Math.min(window.innerWidth, window.innerHeight)
	const size = Math.pow(2, 12)
	noise3d = new Noise3D(size, size)
	await noise3d.init()
	document.body.appendChild(noise3d.renderer.domElement)
	noise3d.render()
}

window.addEventListener('load', async () => {
	await init()
	// animate()
})

window.addEventListener('resize', () => {})
