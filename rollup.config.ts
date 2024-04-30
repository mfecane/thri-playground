import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import glsl from 'rollup-plugin-glsl'

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

export default [
	{ ...DEFAULT, input: 'src/depthpass/index.ts', output: { file: 'public/build/bundle_depthpass.js' } },

	{ ...DEFAULT, input: 'src/01/index.ts', output: { file: 'public/build/bundle1.js', format: 'cjs' } },
	{ ...DEFAULT, input: 'src/02/index.ts', output: { file: 'public/build/bundle2.js', format: 'es' } },
]
