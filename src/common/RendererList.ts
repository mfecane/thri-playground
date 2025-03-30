import { TattooArmRenderer } from '@/tattoo-rendering/TattooArmRenderer'
import { Step1 } from '@/tattoo-rendering/step1/Step1'
import { Renderer } from '@/common/Renderer'
import { TemporalRenderer } from '@/temporal/TemporalRenderer'
import { FogRenderer } from '@/fog/FogRenderer'
import { Step2 } from '@/tattoo-rendering/step2/Step2'
import { Depthpass } from '@/depthpass/Depthpass'

type MyClassConstructor = new (...args: any[]) => Renderer

export const enum RenderersEnum {
	tattooRendering = 'tattoo-rendering',
	step1 = 'Step1',
	step2 = 'Step2',
	step3 = 'Step3',
	step4 = 'Step4',
	temporalRenderer = 'temporal-renderer',
	fogRenderer = 'FogRenderer',
	depth = 'Depth',
}

export class RendererInfo {
	public constructor(public id: RenderersEnum, public className: MyClassConstructor, public description?: string) {}
}

class RenderersReposditory {
	private rendererList: Record<string, RendererInfo[]> = {}

	public register(id: RenderersEnum, className: MyClassConstructor, group?: string, description?: string) {
		const info = new RendererInfo(id, className, description)

		if (!group) {
			group = 'default'
		}

		if (!this.rendererList[group]) {
			this.rendererList[group] = []
		}

		this.rendererList[group].push(info)
	}

	public getGroups() {
		return Object.keys(this.rendererList)
	}

	public getRenderersByGroups(group: string) {
		if (!(group in this.rendererList)) {
			throw new Error('Invalid renderer group')
		}

		return this.rendererList[group]
	}

	public getRendererById(id: RenderersEnum): RendererInfo {
		let renderer: RendererInfo | null = null
		Object.keys(this.rendererList).forEach((key) => {
			const found = this.rendererList[key].find((v) => v.id === id) ?? null
			if (found) {
				renderer = found
			}
		})
		if (!renderer) {
			throw new Error('Invalid renderer ')
		}
		return renderer
	}
}

export const renderersReposditory = new RenderersReposditory()

renderersReposditory.register(RenderersEnum.tattooRendering, TattooArmRenderer, 'Arm', 'Tattoo arm rendering')
renderersReposditory.register(RenderersEnum.step1, Step1, 'Arm')
renderersReposditory.register(RenderersEnum.temporalRenderer, TemporalRenderer)
renderersReposditory.register(RenderersEnum.fogRenderer, FogRenderer)
renderersReposditory.register(RenderersEnum.depth, Depthpass)
