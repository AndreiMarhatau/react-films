const { merge } = require('webpack-merge');
const path = require("path");
const common = require("./webpack.config");

//Plugin to minimize js code
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin()]
    }
});