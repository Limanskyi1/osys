const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const HtmlWebpackPlugin = require ('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

const filename = (folder, ext) => isDev ? `${folder}/[name].${ext}` : `${folder}/[name].${ext}`
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill/noConflict', './js/main.js']
    },
    output: {
        filename: filename('js', 'js'),
        path: path.resolve(__dirname, 'assets'),
    },
    devServer: {
        port: 4200,
        hot: isDev,
        overlay: true,
        contentBase: './src',
        watchContentBase: true,
    },
    devtool: isDev ? 'source-map' : '',
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|webp|gif|svg|mp4)$/,
                include: path.resolve(__dirname, 'src/img'),
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        publicPath: '../',
                        outputPath: './img',
                        useRelativePath: true
                    }
                }, ]
            },

            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)$/,
                include: path.resolve(__dirname, 'src/fonts'),
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        publicPath: '../',
                        outputPath: './',
                        useRelativePath: true
                    }
                }, ],
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: filename('css', 'css'),
        }),
        
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/img'),
                to: path.resolve(__dirname, 'assets/img')
            }, ],
        })
    ]
}