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
	temporalRenderer = 'temporal-renderer',
	fogRenderer = 'FogRenderer',
	depth = 'Depth',
}

export const rendererList: { id: RenderersEnum; class: MyClassConstructor }[] = [
	{ id: RenderersEnum.tattooRendering, class: TattooArmRenderer },
	{ id: RenderersEnum.step1, class: Step1 },
	{ id: RenderersEnum.step2, class: Step2 },
	{ id: RenderersEnum.temporalRenderer, class: TemporalRenderer },
	{ id: RenderersEnum.fogRenderer, class: FogRenderer },
	{ id: RenderersEnum.depth, class: Depthpass },
]
