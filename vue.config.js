/*
 * @Author: yukiball yukiball
 * @Date: 2024-06-25 16:58:46
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-23 23:12:53
 * @FilePath: \look-at-me\vue.config.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin({
  outputFormat: "human",
});
// const fs = require("fs");
// const path = require("path");
const { defineConfig } = require("@vue/cli-service");
// const { use } = require("vue/types/umd");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

let config = {
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/look-at-me/" : "/",
  configureWebpack: getConfigureWebpack(),

  chainWebpack: (config) => {
    //   config.module
    //     .rule("js") // 添加一个规则命名为 'js'
    //     .test(/\.js$/) // 匹配文件后缀为 .js 的文件
    //     .exclude // 排除特定目录
    //     .add(/node_modules/) // 添加排除目录为 node_modules
    //     .end()
    //     .use("thread-loader") // 使用 thread-loader 处理 .js 文件
    //     .loader("thread-loader") // 指定 thread-loader 作为 loader
    //     .end()
    //     .use("babel-loader") // 使用 babel-loader 处理 .js 文件
    //     .loader("babel-loader") // 指定 babel-loader 作为 loader
    //     .end();
  },
};
// 自动分包
// if (process.env.NODE_ENV === "prduction") {
// config["optimization"] = {
//   splitChunks: {
//     chunks: "all",
//     maxSize: 60000,
//   },
// };
// }
function getConfigureWebpack() {
  if (process.env.NODE_ENV === "development") {
    // return smp.wrap({
    //   plugins: [],
    // });
    // return {
    //   stats: {
    //     colors: true,
    //     module: false,
    //   },
    // };
  } else {
    return {
      optimization: {
        splitChunks: {
          chunks: "all",
          // maxSize: 60000,
          minChunks: 1,
          minSize: 0,
        },
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].[hash:5].css",
        }),
      ],
    };
  }
}
// switch (process.env.NODE_ENV) {
//   case "development":
//     config["devServer"] = {
//       setupMiddlewares(middlewares, devServer) {
//         devServer.app.get("/setup-middleware/some/path", (_, response) => {
//           response.send("setup-middlewares option GET");
//         });

//         // middlewares.unshift({
//         //   name: "first-in-array",
//         //   // `path` 是可选的
//         //   path: "/mock/*.json",
//         //   middleware: (req, res) => {
//         //     // res.json(
//         //     //   JSON.parse(
//         //     //     fs.readFileSync(path.join(__dirname, "./", req.url), "utf8")
//         //     //   )
//         //     // );
//         //   },
//         // });
//         // devServer.app.all("/mock/*.json", (req, res) => {
//         //   res.json(
//         //     JSON.parse(
//         //       fs.readFileSync(path.join(__dirname, "./", req.url), "utf8")
//         //     )
//         //   );
//         // });
//       },
//     };
//     break;
//   case "debug":
//     /**
//      * 注意！！！如果需要启用debug环境，需要你在本地设置一份借贷宝用户登陆的公参（可用charles抓取，不影响单点登录），将根目录下
//      * http_config/commonData.ts文件中的数据更新
//      */
//     config["devServer"] = {
//       // 如果你的项目只对接一个服务器，可以直接用这种配置
//       proxy: "http://127.0.0.1:3000",

//       // 如果你的项目对接多个服务器，可以用这种配置分开配置
//       // proxy: {
//       //   '/aaaa/*': {
//       //     target: 'http://100.73.55.34'
//       //   },
//       //   '/bbbb/*': {
//       //     // target: 'http://100.73.37.249'
//       //     target: 'http://127.0.0.1:3000'
//       //   }
//       // },
//     };
//     break;
// }
module.exports = defineConfig(config);
