const Path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: Path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {test: /\.(js|jsx)/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }

}
