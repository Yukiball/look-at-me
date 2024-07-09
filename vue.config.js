/*
 * @Author: yukiball yukiball
 * @Date: 2024-06-25 16:58:46
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-09 21:32:25
 * @FilePath: \look-at-me\vue.config.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const { defineConfig } = require("@vue/cli-service");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/look-at-me/" : "/",
  chainWebpack(config) {
    config.plugin("compression-webpack-plugin").use(CompressionPlugin, [
      {
        algorithm: "gzip", // 使用gzip压缩
        test: /\.(js|css|html)$/, // 匹配文件名
        filename: "[base].gz", // 压缩后的文件名(保持原文件名，后缀加.gz)
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
      },
    ]);
  },
});
