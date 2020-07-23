const { merge } = require('webpack-merge');
const path = require("path");
const common = require("./webpack.config");

//Plugin to minimize js code
const TerserJSPlugin = require('terser-webpack-plugin');

const PATH = {
    SRC: path.join(__dirname, 'src'),
    PUBLIC: path.join(__dirname, 'src', 'public'),
    DIST: path.join(__dirname, 'dist'),
  };

module.exports = merge(common, {
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin()]
    }
});