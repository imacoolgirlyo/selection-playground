const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/selection.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 8001
  }
}
