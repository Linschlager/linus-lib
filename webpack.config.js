var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main/main.js',
    output: {
        filename: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-0']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};