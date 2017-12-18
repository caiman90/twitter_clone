/**
 * Created by rejhan on 15.12.2017.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body',

});
module.exports = {
    entry: "./public/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            include: path.join(__dirname,'public'),
            loader: 'babel-loader',
            query: {presets: ["es2015","react"]}
        },

            {
                test: /\.scss/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    use: ["css-loader","sass-loader"],
                }),

            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            }]
    },
    plugins: [  HtmlWebpackPluginConfig,
                new ExtractTextPlugin('style.css')
    ],
    resolve: {
       extensions: ['.js','.css','.scss']
    },
    devtool: 'inline-source-map'
};
