const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        historyApiFallback: true,
        port: 3000,
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[name].js.map',
        //     exclude: ['babel-polyfill', 'react', 'react-dom']
        // })
    ]
})