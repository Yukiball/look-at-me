<!--
 * @Author: yukiball yukiball
 * @Date: 2024-07-09 17:05:58
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-28 00:36:00
 * @FilePath: \look-at-me\src\views\HomeView.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="content">
    <div class="pc">
      <img src="~@/assets/logo.png" alt="" />
      <HelloWorld msg="~欢迎来到我的项目展示页面~"></HelloWorld>
      <div class="green btn showqr">小程序展示</div>
      <div class="blue btn" @click="goDoc">学习doc</div>
      <div class="yellow btn" @click="to2048">玩一会儿吧</div>
    </div>
    <!-- <input v-if="type" type="text" v-myfocus="showdata" />
    <button @click="type = !type">demo</button> -->
    <div class="phone">请用pc端打开~</div>
    <input type="text" v-model="mytext" />
    <div v-copy="mytext">{{ mytext }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { myfocus } from "@/directives/focus";
import { copy } from "@/directives/copy";
@Component({
  components: {
    HelloWorld,
  },
  directives: {
    myfocus,
    copy,
  },
})
export default class HomeView extends Vue {
  type = false;
  private mytext = "这是初始值";
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
  .phone {
    display: none;
  }
  --t-color: #3eaf7c;
  --c-brand: #3eaf7c;
  --c-bg: #fff;
  --b-brand: #54a0eb;
  --y-brand: #f89b54;
  img {
    height: 30vw;
  }
  text-align: center;
  .text {
    margin: 0 auto;
    display: in;
  }
  .btn {
    margin: 20px 20px 0 20px;
    display: inline-block;
    box-sizing: border-box;
    padding: 0.8rem 1.6rem;
    border-width: 2px;
    border-style: solid;
    border-radius: 4px;
    font-size: 1.2rem;
    transition: background-color var(--t-color);
    &:hover {
      cursor: pointer;
    }
  }
  .green {
    position: relative;
    border-color: var(--c-brand);
    background-color: var(--c-brand);
    color: var(--c-bg);
  }
  .showqr:hover:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 4.2rem;
    display: block;
    height: 200px;
    width: 200px;
    background: url("@/assets/dzqt.jpg");
    background-size: 100%;
  }

  .blue {
    border-color: var(--b-brand);
    background-color: var(--b-brand);
    color: var(--c-bg);
  }
  .yellow {
    border-color: var(--y-brand);
    background-color: var(--y-brand);
    color: var(--c-bg);
  }
  @media screen and (max-width: 520px) {
    .pc {
      display: none;
    }

    .phone {
      display: block;
    }
  }
}
</style>
