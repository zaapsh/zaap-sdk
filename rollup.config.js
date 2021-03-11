const typescript = require('@rollup/plugin-typescript')
const commonjs = require('@rollup/plugin-commonjs')

module.exports = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'Zaap',
  },
  plugins: [
    typescript(),
    commonjs({
      extensions: ['.js', '.ts'],
    })
  ]
}
