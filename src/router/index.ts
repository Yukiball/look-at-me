/*
 * @Author: yukiball yukiball
 * @Date: 2024-07-23 18:26:46
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-28 16:48:17
 * @FilePath: \look-at-me\src\router\index.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/2048",
    name: "2048",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/2048/index.vue"),
  },
  {
    path: "/demo",
    name: "demo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/demo/demo.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
