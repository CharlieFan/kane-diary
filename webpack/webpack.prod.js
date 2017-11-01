const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '..')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        })
    ]
})