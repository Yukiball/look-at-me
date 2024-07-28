<!--
 * @Author: yukiball yukiball
 * @Date: 2024-07-09 17:05:58
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-28 17:14:17
 * @FilePath: \look-at-me\src\views\demo\demo.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="content">
    <div style="overflow: hidden">
      <div>自动聚焦</div>
      <input
        v-if="type"
        type="text"
        v-model="focuseText"
        v-myfocus="showdata"
      />
      <button @click="type = !type">demo</button>
    </div>
    <div style="overflow: hidden">
      <div>长按复制</div>
      <input type="text" v-model="mytext" />
      <div v-copy="mytext">{{ mytext }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { myfocus } from "@/directives/focus";
import { copy } from "@/directives/copy";
@Component({
  components: {},
  directives: {
    myfocus,
    copy,
  },
})
export default class HomeView extends Vue {
  type = false;
  private mytext = "这是初始值";
  private focuseText = "text";
  private showdata = { a: 1, b: 2 };
  to2048() {
    this.$router.push({ path: "/2048" });
  }
  goDoc() {
    window.open("https://yukiball.github.io/display/");
  }
}
</script>

<style scoped lang="scss">
.content {
  .left {
    float: left;
  }
}
</style>
