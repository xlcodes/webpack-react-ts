const {merge} = require("webpack-merge");
const {baseConfig} = require('./webpack.config.base');
// CSS 压缩插件
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
// JS 代码压缩
const TerserPlugin = require('terser-webpack-plugin');
// 清理原来的打包文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new CssMinimizerWebpackPlugin(),
        new CleanWebpackPlugin(),
        new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true, // 去除 console.log
                }
            }
        })
    ]
})