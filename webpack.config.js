const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            src: path.resolve(PATH.SRC),
            public: path.resolve(PATH.PUBLIC),
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
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options:{
                            modules: true
                        }
                    },
                    'sass-loader'
                ],
                exclude: [
                    /node_modules/,
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin(
            {
                    excludeChunks: [ 'server' ],
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
    ],
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 8081
      }
}