const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: '/',
    filename: "webpack.bundle.js",
    assetModuleFilename: 'img/[name][ext][query]'
  },
  
  resolve: {
    alias: {
      app: path.join(__dirname, "src", "app"),
      context: path.join(__dirname, "src", "context"),
      components: path.join(__dirname, "src", "components"),
      pages: path.join(__dirname, "src", "pages"),
      services: path.join(__dirname, "src", "services"),
      store: path.join(__dirname, "src", "store"),
      actions: path.join(__dirname, "src", "actions"),
      reducers: path.join(__dirname, "src", "reducers"),
      constants: path.join(__dirname, "src", "constants"),
      middlewares: path.join(__dirname, "src", "middlewares"),
      layouts: path.join(__dirname, "src", "layouts"),
      config: path.join(__dirname, "src", "config"),
      helpers: path.join(__dirname, "src", "helpers"),
      styles: path.join(__dirname, "src", "styles"),
      assets: path.join(__dirname, "src", "assets"),
      img: path.join(__dirname, "src", "assets", "img"),
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          process.env.NODE_ENV === "development"
          ? "style-loader"
          : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
        secure: false,
    },
  },
  historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "public", "index.html"),
      title: "CMS",
    }),

    new MiniCssExtractPlugin({
      filename: "index.css",
    }),

    new Dotenv(),
  ],
};