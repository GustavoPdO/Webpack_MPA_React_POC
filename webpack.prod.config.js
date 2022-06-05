const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, "src/index.jsx"),
    help: path.resolve(__dirname, "help/help.jsx"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    alias: {
      shared: path.resolve(__dirname, "src/shared"),
    },
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["main"],
      title: "Main",
      description: "The Application itself",
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new HtmlWebpackPlugin({
      filename: "help.html",
      chunks: ["help"],
      title: "Help",
      description: "The Application's user guide static page",
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};
