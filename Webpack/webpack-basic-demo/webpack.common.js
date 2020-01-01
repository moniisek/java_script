const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "none",
  entry: "./src/app.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {test: /\.html$/, use: "html-loader"},
      {test: /\.(svg|png|jpg|gif)$/, use: {
        loader: 'file-loader',
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "images",
          esModule: false
        }
      }},
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
}
