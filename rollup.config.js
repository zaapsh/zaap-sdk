const typescript = require('rollup-plugin-typescript2')
const commonjs = require('@rollup/plugin-commonjs')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const keysTransformer = require('ts-transformer-keys/transformer').default

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      format: 'umd',
      name: 'Zaap',
      file: 'dist/index.js'
    },
    {
      format: 'es',
      file: 'dist/index.esm.js'
    },
  ],
  plugins: [
    typescript({
      module: 'esnext',
      target: 'es5',
      transformers: [
        service => ({
          before: [keysTransformer(service.getProgram())],
          after: []
        })
      ],
    }),
    nodeResolve(),
    commonjs({
      extensions: ['.js', '.ts'],
    })
  ]
}
