import { Biba } from './Biba'

let biba: Biba

async function animate() {
	requestAnimationFrame(animate)
	biba.render()
}

async function init() {
	biba = new Biba(window.innerWidth, window.innerHeight)
	await biba.init()
	document.body.appendChild(biba.renderer.domElement)
}

window.addEventListener('load', async () => {
	await init()
	animate()
})

window.addEventListener('resize', () => {})
