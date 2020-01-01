const Merge = require("webpack-merge");
const common = require('./webpack.common.js');
const Path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = Merge(common, {
  mode: "production",
  output: {
    filename: "main.[contentHash].bundle.js",
    path: Path.resolve(__dirname, "dist")
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contentHash].css"
    })
  ],
  module: {
    rules: [
      {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
    ]
  }
})
