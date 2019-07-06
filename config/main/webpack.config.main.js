process.env.BABEL_ENV = 'main'
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
let mainConfig = {
  context: __dirname,
  node: {
      __filename: false,
      __dirname: false
  },
  devtool: 'source-map',
  entry: {
    main: path.join(__dirname, '../../src/main/index.js')
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../../dist/electron')
  },
  externals: nodeModules,
  module: {
    rules: [{
        test: /\.js$/,
        exclude:/(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        },
    }, {
        test: /\.json$/,
        loader: 'json-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'development'
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.node']
  },
  target: 'electron-main'
}

module.exports = mainConfig

