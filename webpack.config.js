const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    mode: 'production',
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
                    MiniCssExtractPlugin.loader,
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
        new CopyWebpackPlugin(
            {
                patterns: [
                  {
                    from: "CNAME"
                  },
                ]
              }
          ),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new HtmlWebpackPlugin({
            template: './src/views/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPugPlugin()
    ]
}