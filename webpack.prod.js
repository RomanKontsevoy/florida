const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const tinyPngWebpackPlugin = require('tinypng-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'postcss-loader'
                ]
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
        new tinyPngWebpackPlugin({
            key:"VBDkBCpEXLRet4VLaS4IBUGdwNi6YQL4",
            ext: ['png', 'jpeg', 'jpg'],//img ext name
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
                cache: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
});