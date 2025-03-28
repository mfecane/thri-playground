import { Renderer } from './Renderer'
import { RenderersEnum, renderersReposditory } from './RendererList'

export class RendererFactory {
	public create(id: RenderersEnum): Renderer {
		const ctor = renderersReposditory.getRendererById(id)
		if (!ctor) {
			throw new Error('Incorrect renderer id')
		}
		return new ctor.className()
	}
}
