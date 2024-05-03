import { WebGLRenderer } from 'three'
import { Gargantua } from './Gargantua'

let renderer: WebGLRenderer, garg: Gargantua

async function animate() {
	requestAnimationFrame(animate)
	garg.render()
}

async function init() {
	renderer = new WebGLRenderer()
	renderer.setSize(window.innerWidth, window.innerHeight)

	garg = new Gargantua(renderer)
	await garg.init()

	document.body.appendChild(renderer.domElement)
}

window.addEventListener('load', async () => {
	await init()
	animate()
})

window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight)
	garg.setSize(window.innerWidth, window.innerHeight)
})
