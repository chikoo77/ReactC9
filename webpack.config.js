const path = require('path');

module.exports = {
  mode : 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname,'build'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }          
        }
      ]
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'build')
  }
}