export class Stats {
	public container: HTMLDivElement

	private mode = 0

	private beginTime = (performance || Date).now()
	private prevTime = this.beginTime
	private frames = 0

	private fpsPanel: Panel
	private msPanel: Panel
	
	//@ts-expect-error
	private memPanel: Panel

	public constructor() {
		this.container = document.createElement('div')
		this.container.style.cssText = `
			position: fixed;
			bottom: 0px;
			right: 0px;
			cursor: pointer;
			opacity: 0.9;
			z-index: 10000;
			width: 80px;
			height: 48px;
		`
		this.container.addEventListener(
			'click',
			(event: MouseEvent) => {
				event.preventDefault()
				this.showPanel(++this.mode % this.container.children.length)
			},
			false
		)

		this.fpsPanel = this.addPanel(new Panel('FPS', '#0ff', '#002'))
		this.msPanel = this.addPanel(new Panel('MS', '#0f0', '#020'))

		//@ts-ignore fuck off
		if (globalThis.performance && globalThis.performance.memory) {
			this.memPanel = this.addPanel(new Panel('MB', '#f08', '#201'))
		}

		this.showPanel(0)
	}

	public begin() {
		this.beginTime = (performance || Date).now()
	}

	public end() {
		this.frames++

		var time = (performance || Date).now()

		this.msPanel.update(time - this.beginTime, 200)

		if (time > this.prevTime + 1000) {
			this.fpsPanel.update((this.frames * 1000) / (time - this.prevTime), 100)

			this.prevTime = time
			this.frames = 0

			if (this.memPanel) {
				//@ts-ignore fuck off
				var memory = performance.memory
				this.memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576)
			}
		}

		return time
	}

	public update() {
		this.beginTime = this.end()
	}

	public showPanel(id: number) {
		for (var i = 0; i < this.container.children.length; i++) {
			;(this.container.children[i] as HTMLElement).style.display = i === id ? 'block' : 'none'
		}

		this.mode = id
	}

	private addPanel(panel: Panel) {
		this.container.appendChild(panel.canvas)
		return panel
	}
}

class Panel {
	private context: CanvasRenderingContext2D
	public canvas: HTMLCanvasElement
	private min = Infinity
	private max = 0
	private PR = Math.round(window.devicePixelRatio || 1)
	private WIDTH = 80 * this.PR
	private HEIGHT = 48 * this.PR
	private TEXT_X = 3 * this.PR
	private TEXT_Y = 2 * this.PR
	private GRAPH_X = 3 * this.PR
	private GRAPH_Y = 15 * this.PR
	private GRAPH_WIDTH = 74 * this.PR
	private GRAPH_HEIGHT = 30 * this.PR

	constructor(private name: string, private fg: string, private bg: string) {
		this.canvas = document.createElement('canvas')
		this.canvas.width = this.WIDTH
		this.canvas.height = this.HEIGHT
		this.canvas.style.cssText = 'width:80px;height:48px'

		//@ts-expect-error
		this.context = this.canvas.getContext('2d')
		this.context.font = 'bold ' + 9 * this.PR + 'px Helvetica,Arial,sans-serif'
		this.context.textBaseline = 'top'

		this.context.fillStyle = bg
		this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT)

		this.context.fillStyle = fg
		this.context.fillText(this.name, this.TEXT_X, this.TEXT_Y)
		this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT)

		this.context.fillStyle = bg
		this.context.globalAlpha = 0.9
		this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT)
	}

	public update(value: number, maxValue: number) {
		this.min = Math.min(this.min, value)
		this.max = Math.max(this.max, value)

		this.context.fillStyle = this.bg
		this.context.globalAlpha = 1
		this.context.fillRect(0, 0, this.WIDTH, this.GRAPH_Y)
		this.context.fillStyle = this.fg
		this.context.fillText(
			Math.round(value) + ' ' + this.name + ' (' + Math.round(this.min) + '-' + Math.round(this.max) + ')',
			this.TEXT_X,
			this.TEXT_Y
		)

		this.context.drawImage(
			this.canvas,
			this.GRAPH_X + this.PR,
			this.GRAPH_Y,
			this.GRAPH_WIDTH - this.PR,
			this.GRAPH_HEIGHT,
			this.GRAPH_X,
			this.GRAPH_Y,
			this.GRAPH_WIDTH - this.PR,
			this.GRAPH_HEIGHT
		)

		this.context.fillRect(this.GRAPH_X + this.GRAPH_WIDTH - this.PR, this.GRAPH_Y, this.PR, this.GRAPH_HEIGHT)

		this.context.fillStyle = this.bg
		this.context.globalAlpha = 0.9
		this.context.fillRect(
			this.GRAPH_X + this.GRAPH_WIDTH - this.PR,
			this.GRAPH_Y,
			this.PR,
			Math.round((1 - value / maxValue) * this.GRAPH_HEIGHT)
		)
	}
}
