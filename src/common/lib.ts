import { Texture } from 'three'

let called = false

// for debugging
export function callOnce(callback: Function) {
	if (called) {
		return
	}
	called = true
	callback()
}

// for debugging
export function callOnceDelayed(callback: Function) {
	callOnce(() => {
		window.setTimeout(() => {
			callback()
		}, 2000)
	})
}

export function nonBiasedRand() {
	return Math.random() * 2 - 1
}

export function biasedRand() {
	let r = Math.random() * 2 - 1
	return r * Math.abs(r)
}
