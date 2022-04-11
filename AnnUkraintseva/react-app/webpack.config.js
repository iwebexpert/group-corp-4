const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'webpack.bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      actions: path.join(__dirname, 'src', 'actions'),
      containers: path.join(__dirname, 'src', 'containers'),
      context: path.join(__dirname, 'src', 'context'),
      pages: path.join(__dirname, 'src', 'pages'),
      reducers: path.join(__dirname, 'src', 'reducers'),
      services: path.join(__dirname, 'src', 'services'),
      middleware: path.join(__dirname, 'src', 'middleware'),

    },
  },



  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
      },
    ],
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        secure: false,
      },
    },
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      title: 'AnnUkraintseva APP1',
    }),

    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),

    new Dotenv(),
  ],
}
