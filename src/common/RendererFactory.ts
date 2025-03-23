import { Renderer } from './Renderer'
import { rendererList, RenderersEnum } from './RendererList'

export class RendererFactory {
	public create(id: RenderersEnum): Renderer {
		const ctor = rendererList.find((r) => r.id === id)
		if (!ctor) {
			throw new Error('Incorrect renderer id')
		}
		return new ctor.class()
	}
}
