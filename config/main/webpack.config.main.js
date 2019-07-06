process.env.BABEL_ENV = 'main'

const path = require('path')
const webpack = require('webpack')


let mainConfig = {
  context: path.resolve(__dirname),
  devtool: 'source-map',
  entry: {
    main: path.join(__dirname, '../../src/main/index.js')
  },
  node: {
    __dirname: process.env.NODE_ENV !== 'production',
    __filename: process.env.NODE_ENV !== 'production'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../../dist/electron')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'development'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.node']
  },
  target: 'electron-main'
}

module.exports = mainConfig