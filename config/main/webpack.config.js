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
function webpackConfig(mode = 'development') {
  return {
    context: __dirname,
    mode: mode,
    node: {
        __filename: false,
        __dirname: false
    },
    devtool: 'source-map',
    entry: [
      // 'webpack/hot/poll?1000',
      path.join(__dirname, '../../src/main/index.js')
    ],
    output: {
      filename: 'main.js',
      libraryTarget: 'commonjs2',
      path: path.join(__dirname, '../../dist/main')
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
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': 'development'
      }),
    ],
    resolve: {
      extensions: ['.js', '.json', '.node']
    },
    target: 'electron-main'
  }
}

module.exports = webpackConfig

