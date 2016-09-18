var path = require('path')

module.exports = {
  entry: {
    'example/bundle': './example/index'
  },
  devtool: 'source-map',

  output: {
    path: '.',
    filename: '[name].js',
    publicPath: '/example/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },

  devServer: {
    contentBase: './example',
    host: 'localhost',
    inline: true,
    info: false
  }
}
