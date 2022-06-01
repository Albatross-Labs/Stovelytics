const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {

  mode: 'development', 
  entry: './src/index.js', 
  output: {
    filename: 'bundle.[hash].js'
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      { // 1
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      { // 2
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: 'css-loader'
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    })
  ],

  devServer: {
    host: 'localhost',
    port: port,
    open: true,
  },
};