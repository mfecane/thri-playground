import { WebGLRenderer } from 'three'

export interface Renderer {
	renderer: WebGLRenderer

	init(): Promise<void>

	animate(): Promise<void>

	onResize(width: number, height: number): Promise<void>

	destroy(): Promise<void>
}
