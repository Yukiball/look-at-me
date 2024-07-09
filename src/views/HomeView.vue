<!--
 * @Author: yukiball yukiball
 * @Date: 2024-07-09 17:05:58
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-09 17:07:01
 * @FilePath: \look-at-me\src\views\HomeView.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="content">
    <img src="~@/assets/logo.png" alt="" />
    <HelloWorld msg="~欢迎来到我的项目展示页面~"></HelloWorld>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.content {
  text-align: center;
  .text {
    margin: 0 auto;
    display: in;
  }
}
</style>
