const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    entry:{
        index:'./src/Index/index.js',
        admin:'./src/admin.jsx'
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'index',
            template: './src/index.ejs'
        }),
        new CleanWebpackPlugin([
            'build'
        ])
    ],
    output:{
        filename:'./js/[name].js',
        path:path.resolve('./build')
    },
    module:{
        rules:[
            {
                test:/\.[s]*css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(jpg|png|gif|svg|jpeg)$/i,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            context:'./src',
                            name:'./img/[path][hash].[ext]',
                            limit:8192
                        }
                    }
                ]
            },

        ]
    },
    devtool:'inline-source-map'
};
