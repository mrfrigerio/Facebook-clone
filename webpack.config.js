const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.(c|sc|sa)ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  }
}