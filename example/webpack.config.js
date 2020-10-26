const { build } = require('tarot')

module.exports = build({
    entries: {
        bundle: {
            file: 'index.tsx',
            eslintConfigPath: '../.eslintrc.js',
            tsConfigPath: '../tsconfig.json',
        },
    },
})