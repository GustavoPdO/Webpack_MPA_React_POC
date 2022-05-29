const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  entry: {
    main: path.resolve(__dirname, "src/index.jsx"),
    help: path.resolve(__dirname, "help/index.html"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
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
      template: path.resolve(__dirname, "help/index.html"),
    }),
  ],
};
