import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import pkg from './package.json'

const extensions = ['.ts', '.tsx']

export default [
	{
		input: './src/index.ts',
		external: [
			...Object.keys(pkg.peerDependencies),
			/react/,
			/@babel\/runtime/,
		],
		output: {
			file: pkg.module,
			format: 'esm',
		},
		plugins: [
			nodeResolve({ extensions }),
			typescript({ tsconfig: './tsconfig.json' }),
			babel({
				extensions,
				exclude: 'node_modules/**',
				babelHelpers: 'runtime',
			}),
			sizeSnapshot(),
			terser(),
		],
	},
]
