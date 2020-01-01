const Merge = require("webpack-merge");
const common = require('./webpack.common.js');
const Path = require("path");

module.exports = Merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: Path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
    ]
  }
})
