const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin({filename: 'index.html',template: 'src/client/index.html',}),
];
if (process.env.NODE_ENV === 'production') plugins.push(new UglifyJsPlugin());

module.exports = {
    entry: './src/client/index.js',
    devtool: 'eval-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins,
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        host: "0.0.0.0"
    },
};
