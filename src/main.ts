import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { myPromise } from "@/plugin/commonFun/myPromise";

Vue.config.productionTip = false;
(window as any).myPromise = myPromise;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
