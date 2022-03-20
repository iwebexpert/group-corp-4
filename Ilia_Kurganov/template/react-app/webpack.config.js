const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack');

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
      config: path.join(__dirname, 'src', 'config'),
    }
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
        use: [
          // process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
  devServer: {
    proxy: {
      '/api' : {
        target: 'http://localhost:3000/',
        pathRewrite: {'^/api' : ''},
        secure: false,
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      title: 'React App',
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new Dotenv()
  ],
  externals:{
    Config: JSON.stringify(
      process.env.npm_lifecycle_event === "start"
      ? require("./src/config/config.development.env.json")
      : require("./src/config/config.production.env.json")
    ),
  },
};

