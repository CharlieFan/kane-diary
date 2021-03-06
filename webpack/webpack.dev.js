const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const VENDOR_LIBS = [
    'react', 'react-dom', 'react-router-dom', 'redux'
]

const entry = {
    hot: 'react-hot-loader/patch',
    vendor: VENDOR_LIBS,
    app: path.resolve(__dirname, '../src/main/index.tsx')
}

module.exports = merge(common, {
    entry: [entry.hot, ...entry.vendor, entry.app],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        historyApiFallback: true,
        port: 3000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'react-hot-loader/webpack',
                    'ts-loader'
                ],
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: path.resolve(__dirname, '../src/style'),
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            includePaths: [
                                path.resolve(__dirname, '../src/style')
                            ]
                        }
                    } 
                ]
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, '../src/style'),
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            includePaths: [
                                path.resolve(__dirname, '../src/style')
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})