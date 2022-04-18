const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "webpack.bundle.js",
  },
  
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      actions: path.join(__dirname, 'src', 'actions'),
      components: path.join(__dirname, 'src', 'components'),
      containers: path.join(__dirname, 'src', 'containers'),
      contexts: path.join(__dirname, 'src', 'contexts'),
      reducers: path.join(__dirname, 'src', 'reducers'),
      middlewares: path.join(__dirname, 'src', 'middlewares:'),
      services: path.join(__dirname, 'src', 'services'),
      pages: path.join(__dirname, 'src', 'pages'),
      helpers: path.join(__dirname, 'src', 'helpers'),
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
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.s?css$/i,
        use: [
          // process.env.NODE_ENV === "development"
          //   ? "style-loader"
          //   : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
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
      template: path.join(__dirname, "src", "index.html"),
      title: "App v1",
    }),

    new MiniCssExtractPlugin({
      filename: "index.css",
    }),

    new Dotenv(),
  ],
}
//   externals: {
//     Config: JSON.stringify(
//       process.env.npm_lifecycle_event === "dev"
//         ? require("./src/config/config.development.env.json")
//         : require("./src/config/config.production.env.json")
//     ),
//   },
// };

// console.log(process.env)
// npm i @types/react-dom@17 @types/react-helmet @types/redux @types/redux-logger @types/react-redux  @types/redux-thunk @types/uuid 
