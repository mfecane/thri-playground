import typescript from '@rollup/plugin-typescript'
import pluginNodeResolve from '@rollup/plugin-node-resolve'

const DEFAULT = {
	plugins: [typescript(), pluginNodeResolve()],
}

export default [
	{ ...DEFAULT, input: 'src/01/index.ts', output: { file: 'public/build/bundle1.js', format: 'cjs' } },
	{ ...DEFAULT, input: 'src/02/index.ts', output: { file: 'public/build/bundle2.js', format: 'es' } },
]
