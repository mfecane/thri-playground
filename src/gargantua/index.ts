import { WebGLRenderer } from 'three'
import { Gargantua } from './Gargantua'
import { Stats } from '../shared/Stats'

let renderer: WebGLRenderer, garg: Gargantua, stats: Stats

async function animate() {
	requestAnimationFrame(animate)
	stats.begin()
	garg.render()
	stats.end()
}

async function init() {
	renderer = new WebGLRenderer()
	renderer.setSize(window.innerWidth, window.innerHeight)

	garg = new Gargantua(renderer)
	await garg.init()

	document.body.appendChild(renderer.domElement)

	stats = new Stats()
	document.body.appendChild(stats.container)
}

window.addEventListener('load', async () => {
	await init()

	animate()
})

window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight)
	garg.setSize(window.innerWidth, window.innerHeight)
})
