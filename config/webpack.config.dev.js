// 合并规则
const {merge} = require('webpack-merge');
// 导入基本配置
const {baseConfig} = require('./webpack.config.base');
// 导入错误提示插件
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
// ESLint 插件
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(baseConfig, {
    // 环境配置：开发环境
    mode: 'development',
    // 便于开发调试 设置 source-map 模式
    devtool: 'source-map',
    // webpack-dev-server 配置，提供本地服务
    devServer: {
        // host
        host: '127.0.0.1',
        // 端口
        port: 8080,
        // 热更新
        hot: true,
        // 启动时打开浏览器
        open: true,
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new ESLintPlugin({
            fix: true,
            // 需要校验的文件
            extensions: ['js', 'ts', 'tsx', 'json'],
            // 忽略文件
            exclude: "/node_modules/",
        })
    ]
})