var path = require('path')

module.exports = {
  entry: {
    'example/bundle': './example/index'
  },

  output: {
    path: '.',
    filename: '[name].js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?experimental'}
    ]
  }
}

