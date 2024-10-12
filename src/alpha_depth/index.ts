import { AlphaDepth } from './AlphaDepth'

let fuckingShit: AlphaDepth

async function animate() {
	requestAnimationFrame(animate)
	fuckingShit.render()
}

window.addEventListener('load', async () => {
	fuckingShit = await AlphaDepth.create(window.innerWidth, window.innerHeight)
	document.body.appendChild(fuckingShit.renderer.domElement)
	animate()
})

window.addEventListener('resize', () => {
	fuckingShit.resize(window.innerWidth, window.innerHeight)
})
