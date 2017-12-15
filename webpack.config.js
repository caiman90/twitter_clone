/**
 * Created by rejhan on 15.12.2017.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: "./public/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {presets: ["react", "es2015"]}
        }]
    },
    plugins: [HtmlWebpackPluginConfig]
};