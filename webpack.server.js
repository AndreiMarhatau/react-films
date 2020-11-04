const path = require('path');
const externals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATH = {
    SRC: path.join(__dirname, 'src'),
    PUBLIC: path.join(__dirname, 'src', 'public'),
    DIST: path.join(__dirname, 'dist'),
  };

module.exports = {
    context: PATH.SRC,
    entry: './index.js',
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
    },
    externals: [externals()],
    output: {
        filename: 'server.js',
        path: PATH.DIST,
        publicPath: '/',
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
                include: /src/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options:{
                            modules: {
                                exportOnlyLocals: true,
                            }
                        }
                    },
                    'sass-loader'
                ],
                exclude: [
                    /node_modules/
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
}