const path = require('path');
// 根据相对路径获取绝对路径
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);
// HTML模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
// CSS 代码打包分离
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 基础配置
const baseConfig = {
    // 入口文件
    entry: resolvePath("../src/index.tsx"),
    // 出口文件
    output: {
        path: resolvePath("../dist"),
        filename: '[name].bundle.js',
    },
    // loader配置
    module: {
        rules: [
            // 对 CSS 文件进行处理
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            // 对 LESS 文件进行处理
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
            },
            // 对 TS｜TSX 文件进行处理
            {
                test: /\.(ts|tsx)$/,
                use: "babel-loader",
            },
            // 对图片处理
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource',
            }
        ]
    },
    // 插件处理
    plugins: [
        new HtmlWebpackPlugin({
            // 标题
            title: "Webpack5 + React + TS",
            // 模板文件
            template: resolvePath("../public/index.html"),
            // 名称
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: `[name].[hash:8].css`,
        }),
    ],
    // Resolve 配置 webpack 如何寻找模块所对应的文件
    resolve: {
        // 在导入语句没带文件后缀时，webpack 会自动带上后缀去尝试文件是否存在。
        // resolve.extensions 用于配置在尝试过程中用到的后缀列表，默认：js and json
        extensions: ['.js', '.ts', '.tsx'],
        // 配置项通过别名来把原来导入的路径映射成一个新的导入路径
        alias: {
            '@': resolvePath("../src")
        },
    }
}

module.exports = {
    baseConfig,
}