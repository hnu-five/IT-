const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './js/practice.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'), // 热加载时该文件夹生成在内存中
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        compress: true,
        liveReload: false,
        open: true,
        port: 8080,
        hot: true,
        proxy: {
            '/': {
                target: 'http://localhost:5500',
            },
        },
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
    },
    resolve: {
        extensions: ['', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                        }
                    }
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
        }),
    ],
}