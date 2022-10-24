const {merge} = require('webpack-merge');
const {paths, packageInfo, server} = require("./config");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(server, {
    // Set the mode to development or production
    mode: 'development',

    // Where webpack looks to start building the bundle
    entry: [paths.dev + '/index.js'],

    // Where webpack outputs the assets and bundles
    output: {
        path: paths.dist,
        filename: '[name].bundle.js',
        publicPath: '/',
    },

    // Customize the webpack build process
    plugins: [
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

    // Spin up a server for quick development
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8081,
    },
})
