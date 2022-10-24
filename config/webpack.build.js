const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {paths, server, packageInfo} = require('./config');

module.exports = merge(server, {
    mode: 'production',
    devtool: false,

    // Where webpack looks to start building the bundle
    entry: [paths.web + '/script.js'],

    output: {
        path: paths.build,
        publicPath: '/',
        filename: 'js/[name].[contenthash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: false,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        // Extracts CSS into separate files
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),

        // Copies files from target to destination folder
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    to: 'assets',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                },
            ],
        }),

        // Generates an HTML file from a template
        // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            title: packageInfo.prettyName,
            favicon: paths.public + '/images/favicon.png',
            template: paths.dev + '/index.html', // template file
            filename: 'index.html', // output file
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), '...'],
        runtimeChunk: {
            name: 'runtime',
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
})
