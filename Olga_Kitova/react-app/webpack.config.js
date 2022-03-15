const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "webpack.bundle.js",
    assetModuleFilename: 'img/[name][ext][query]'
  },
  
  resolve: {
    alias: {
      app: path.join(__dirname, "src", "app"),
      components: path.join(__dirname, "src", "components"),
      store: path.join(__dirname, "src", "store"),
      reducers: path.join(__dirname, "src", "reducers"),
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