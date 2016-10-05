var path = require('path')

module.exports = {
  entry: path.join(__dirname, 'docs/index.js'),
  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  devServer: {
    contentBase: './docs',
    host: 'localhost',
    inline: true,
    info: false
  }
}
