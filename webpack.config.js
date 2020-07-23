const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
    SRC: path.join(__dirname, 'src'),
    PUBLIC: path.join(__dirname, 'src', 'public'),
    DIST: path.join(__dirname, 'dist'),
  };

module.exports = {
    context: PATH.SRC,
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: PATH.DIST,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            src: path.resolve(PATH.SRC)
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: [
                    /node_modules/
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: `${PATH.SRC}/index.html`,
            },
            process.env.NODE_ENV === 'production'
            ? {
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                },
            }
            : undefined
        ),
    ]
}