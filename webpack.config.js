module.exports = {
  mode : 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
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
    disableHostCheck: true
  }
}