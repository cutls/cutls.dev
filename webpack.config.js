const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.png$/,
                use: 'file-loader',
            },
            {
                test: /\.jpg$/,
                use: 'file-loader',
            },
            {
                test: /\.svg$/,
                use: 'file-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/views/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPugPlugin()
    ]
}