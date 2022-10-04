const {merge} = require("webpack-merge");
const {baseConfig} = require('./webpack.config.base');
// CSS 压缩插件
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
// 清理原来的打包文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new CssMinimizerWebpackPlugin(),
        new CleanWebpackPlugin(),
    ]
})