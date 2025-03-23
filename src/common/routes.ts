import Renderer from '@/common/components/Renderer.vue'
import Landing from '@/common/components/Landing.vue'

export const routes = [
	{
		path: '/',
		component: Landing,
	},
	{
		path: '/:id',
		component: Renderer,
		props: true,
	},
]
