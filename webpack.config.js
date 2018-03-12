 console.log(`当前环境${process.env.NODE_ENV}`)
const path = require('path')
const pkg = require('./package.json')
const webpack = require('webpack')
//
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Ex = require('extract-text-webpack-plugin')
const {sdd}=require('./config/default.js');

module.exports = {
    entry: {
        index: './src/pages/index/js/index.js',
        home: './src/pages/home/js/home.js',
        detail: './src/pages/detail/js/detail.js',
        ajax: './src/pages/ajax/js/ajax.js',
        login:'./src/pages/login/js/login.js',
        from:'./src/pages/from/js/from.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    //如果根目录有了.babelrc配置文件，可以直接在那个文件中配置
                    options: {
                        presets: ['env', 'react'],
                        // ant-design使用babel-plugin-import插件进行按需加载
                        plugins: [
                            ["import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": true
                            }] // `style: true` 会加载 less 文件
                        ]
                    }
                },
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: Ex.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                }),
                exclude: '/node_modules/'
            },
            {
                test: /\.less$/,
                use: Ex.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'less-loader',
                        }
                    ]
                }),
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|jpg|jpeg|gif|bmp)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5000
                    }
                }],
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        
        new webpack.optimize.CommonsChunkPlugin({
            //name对应入口文件中的名字，我们起的是vendor
            name: 'vendor',
            //把文件打包到哪里，是一个路径
            filename: "assets/[name].js"
        }),
        new HtmlWebpackPlugin({
            filename: 'view/index.html',
            chunks: ['vendor', 'index'],
            template: 'src/pages/index/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'view/home.html',
            chunks: ['vendor', 'home'],
            template: 'src/pages/home/home.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'view/detail.html',
            chunks: ['vendor', 'detail'],
            template: 'src/pages/detail/detail.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'view/ajax.html',
            chunks: ['vendor', 'ajax'],
            template: 'src/pages/ajax/ajax.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'view/login.html',
            chunks: ['vendor', 'login'],
            template: 'src/pages/login/login.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'view/from.html',
            chunks: ['vendor', 'from'],
            template: 'src/pages/from/from.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            React: 'react',
            ReactDOM: 'react-dom',
            moment:'moment',
            axios:'axios'
        }),
        new Ex('css/[name].css'),
        
    ],
    resolve: {
        modules: [
            'node_modules',
            sdd.src,
            sdd.components
        ]
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        inline: true,
        port: 9000
    }
}