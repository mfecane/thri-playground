import type {PerspectiveCamera} from 'three'

declare module '*.glsl' {
	const value: string
	export default value
}

interface globalThis {
	THREE: {
		PerspectiveCamera: PerspectiveCamera
	}
}
