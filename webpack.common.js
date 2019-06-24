const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');


module.exports = {
    entry: {
        polyfills: './src/js/polyfills.js',
        index: './src/js/index.js',
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'docs'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img'
                        }
                    },
                ]
            },
            {
                test: /\.(ico|woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: 'html-loader',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new CopyPlugin([
            {from: './src/video', to: './video'},
            {from: './src/ffe_tracking_sample.pdf', to: './ffe_tracking_sample.pdf'}
        ]),
        // new FaviconsWebpackPlugin('./src/img/favicon.png')
    ],
};