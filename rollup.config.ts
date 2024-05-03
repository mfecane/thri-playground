import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import glsl from 'rollup-plugin-glsl'

interface Item {
	id: string
	folder: string | null
}

const folders: Item[] = [
	{ id: 'depthpass', folder: 'archive' },
	{ id: 'raymarch-test', folder: 'archive' },
	{ id: 'raymarch-and-geo', folder: 'archive' },
	{ id: 'noise-fog', folder: 'archive' },
	{ id: 'fog', folder: null },
	{ id: 'volumetric-shadow', folder: 'archive' },
]

const DEFAULT = {
	plugins: [
		resolve(),
		glsl({
			include: './src/**/*.glsl',
			sourceMap: true,
		}),
		typescript(),
	],
}

function buildItem(it: Item) {
	const input = it.folder ? `src/${it.folder}/${it.id}/index.ts` : `src/${it.id}/index.ts`
	const output = it.folder ? `public/build/${it.folder}/${it.id}.js` : `public/build/${it.id}.js`
	return {
		...DEFAULT,
		input,
		output: { file: output },
	}
}

export default [...folders.map((it: Item) => buildItem(it))]
