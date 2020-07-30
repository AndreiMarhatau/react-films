const { merge } = require('webpack-merge');
const path = require("path");
const common = require("./webpack.config");

const PATH = {
    SRC: path.join(__dirname, 'src'),
    PUBLIC: path.join(__dirname, 'src', 'public'),
    DIST: path.join(__dirname, 'dist'),
  };

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
});