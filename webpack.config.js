const path = require('path');

module.exports = {
  context: __dirname,

  entry: './js/ClientApp.jsx',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devtool: 'cheap-eval-source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    publicPath: '/public/',
  }
};
