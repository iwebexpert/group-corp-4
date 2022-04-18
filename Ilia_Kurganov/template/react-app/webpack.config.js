const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'webpack.bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      config: path.join(__dirname, 'src', 'config'),
      containers: path.join(__dirname, 'src', 'containers'),
      actions: path.join(__dirname, 'src', 'actions'),
      reducers: path.join(__dirname, 'src', 'reducers'),
      services: path.join(__dirname, 'src', 'services'),
      middlewares: path.join(__dirname, 'src', 'middlewares'),
      contexts: path.join(__dirname, 'src', 'contexts'),
      helpers: path.join(__dirname, 'src', 'helpers'),
      pages: path.join(__dirname, 'src', 'pages'),
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
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.s?css$/i,
        use: [
          // process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        pathRewrite: { '^/api': '' },
        secure: false,
      },
    },
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      title: 'React App',
      favicon: path.join(__dirname, 'src', 'favicon.png'),
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new Dotenv(),
  ],
  externals: {
    Config: JSON.stringify(
      process.env.npm_lifecycle_event === 'start'
        ? require('./src/config/config.development.env.json')
        : require('./src/config/config.production.env.json'),
    ),
  },
}
