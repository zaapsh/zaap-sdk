const typescript = require('@rollup/plugin-typescript')

module.exports = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'Zaap',
  },
  plugins: [typescript()]
}
