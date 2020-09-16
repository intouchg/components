import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import pkg from './package.json'

const extensions = ['.ts', '.tsx']

const baseConfig = {
    input: './src/index.ts',
    external: Object.keys(pkg.peerDependencies),
}

const babelOptions = {
    babelrc: false,
    extensions,
    babelHelpers: 'runtime',
    exclude: '**/node_modules/**',
    presets: [
        [ '@babel/preset-env', { loose: true, modules: false, targets: '>1%, not dead, not ie 11, not op_mini all' } ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        [ 'babel-plugin-styled-components', { ssr: true, pure: true, displayName: true } ],
    ],
}

const eslintOptions = {
    fix: true,
    configFile: './.eslintrc.js',
    include: 'src',
}

export default [
    {
        ...baseConfig,
        output: { file: pkg.module, format: 'esm' },
        plugins: [
            resolve({ extensions }),
            eslint(eslintOptions),
            babel(babelOptions),
            terser(),
            sizeSnapshot(),
        ],
    },
]