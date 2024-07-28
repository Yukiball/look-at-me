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
    <div class="ball"></div>
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
  mytext = "这是初始值";
  focuseText = "text";
  showdata = { a: 1, b: 2 };
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
  .ball {
    width: 100px;
    height: 100px;
    position: absolute;
    background-color: #0ea9ff;
    border-width: 5px;
    border-style: solid;
    border-color: #5daf34;
    transition: all 2s ease 0ms;
    animation: identifier 2s;
    animation-fill-mode: forwards;
    // animation: reverse 2s;

    // transition-property: width, height, background-color, border-width;
    // transition-duration: 2s;
    // transition-timing-function: ease-in;
    // transition-delay: 500ms;
  }

  /*简写*/
  /*transition: all 2s ease-in 500ms;*/
  .ball:hover {
    width: 200px;
    height: 200px;
    background-color: #5daf34;
    border-width: 10px;
    border-color: #3a8ee6;
    // animation: rotate 2s;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes reverse {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  @keyframes identifier {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
}
</style>
