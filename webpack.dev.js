const { merge } = require('webpack-merge');
const path = require("path");
const common = require("./webpack.config");

module.exports = merge(common, {
  devtool: 'source-map',
});