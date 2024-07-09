/*
 * @Author: yukiball yukiball
 * @Date: 2024-06-25 16:58:46
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-09 20:38:35
 * @FilePath: \look-at-me\vue.config.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/look-at-me/" : "/",
});
