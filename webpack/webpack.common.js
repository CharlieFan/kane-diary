const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const VENDOR_LIBS = [
    'babel-polyfill', 'react', 'react-dom', 'react-router-dom', 'redux'
]

const config = {
    entry: {
        vendor: VENDOR_LIBS,
        app: path.resolve(__dirname, '../src/main/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.resolve(__dirname, '../src'), // module use src as a url base
            'node_modules'
        ],
        alias: {
            'assets': path.resolve(__dirname, '../src/assets/'),  // use assets/** as images base
            'state': path.resolve(__dirname, '../src/state/') // state base url
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
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
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'Kane Book',
            template: path.resolve(__dirname, '../src/main/index.html'),
            filename: path.resolve(__dirname, '../dist/index.html')
        })
    ]
}

module.exports = config