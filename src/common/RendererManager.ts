import { Renderer } from './Renderer'
import { RendererFactory } from './RendererFactory'
import { RenderersEnum } from './RendererList'

export class RendererManager {
	private activeRenderer: Renderer | null = null

	private factory = new RendererFactory()

	public constructor() {}

	public async setRenderer(id: RenderersEnum) {
		this.activeRenderer?.destroy()
		this.activeRenderer = this.factory.create(id)
		await this.activeRenderer!.init()
		this.activeRenderer!.animate()
	}

	public clear() {
		this.activeRenderer?.destroy()
		this.activeRenderer = null
	}

	public onResize(width: number, height: number) {
		this.activeRenderer?.onResize(width, height)
	}
}

export const rendererManager = new RendererManager()
