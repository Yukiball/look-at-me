<template>
  <div class="game">
    <div id="logo">
      <img src="~@/assets/yuki.png" />
      <div>扫描这里试玩手机版</div>
    </div>
    <div class="wrapper">
      <div class="top">
        <div class="grade">
          <div class="now">
            分数
            <div class="rem">0</div>
          </div>
          <div class="history">
            历史最高分数
            <div class="rem">0</div>
          </div>
        </div>
        <h1 class="number">2048</h1>
      </div>
      <div class="text">将相同数字融合相加，得到 2048 获胜!</div>
      <div class="box">
        <ul class="con"></ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./index.scss";
</style>
