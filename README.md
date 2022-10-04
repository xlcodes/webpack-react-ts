# 自定义配置 webpack-react-ts 项目

## 描述

实现一个简易版的 react 项目！

## 所需依赖

```bash
# 1、webpack的安装
yarn add webpack webpack-cli -D

# 2、把打包的文件配置到html模板
yarn add html-webpack-plugin -D

# 3、入口文件中涉及到了 less 的文件 需要增加配置
yarn add style-loader css-loader less less-loader -D
 
# 4、入口文件中涉及到了 ts 的文件 需要增加的babel配置
yarn add babel-loader @babel/core @babel/preset-env @babel/preset-react -D

# 5、安装webpack服务
yarn add webpack-dev-server -D

# 6、配置合并的插件
yarn add webpack-merge -D

# 7、css分包处理
yarn add mini-css-extract-plugin -D
 
# 8、css压缩处理
yarn add css-minimizer-webpack-plugin -D
 
# 9、进一步处理css文件，比如添加浏览器前缀等
yarn add postcss-loader autoprefixer -D

# 10、错误提示
yarn add friendly-errors-webpack-plugin -D
  
# 11、清理上一次的打包
yarn add clean-webpack-plugin -D

# 12、webpack5 弃用了eslint-loader 支持了eslint-webpack-plugin
yarn add -D eslint-webpack-plugin
 
# 13、eslint 和 prettier 结合校验
yarn add -D eslint prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier
 
# 14、一个可扩展的共享配置
yarn add -D eslint-config-airbnb-base
 
# 15、用于react的eslint规则
yarn add -D eslint-plugin-react
 
# 16、typescript相关规则 详细说明：https://www.npmjs.com/package/@typescript-eslint/parser
yarn add -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

# 17、添加一些.eslintrc文件的扩展特性
yarn add -D standard eslint-plugin-promise eslint-plugin-node eslint-plugin-import eslint-plugin-standard eslint-config-standard
```

## 参考文档

- [webpack中文文档](https://www.webpackjs.com/)
- [TypeScript中文文档](https://www.tslang.cn/)
- [EsLint中文文档](https://eslint.bootcss.com/)
- [Webpack V5 + React 脚手架的配置 🔥🔥](https://juejin.cn/post/7080874840202313742#heading-21)