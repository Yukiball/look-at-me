/*
 * @Author: yukiball yukiball
 * @Date: 2024-07-09 16:56:43
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-14 20:57:11
 * @FilePath: \look-at-me\src\main.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { MyPromise } from "@/plugin/commonFun/myPromise";

Vue.config.productionTip = false;
(window as any).MyPromise = MyPromise;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
