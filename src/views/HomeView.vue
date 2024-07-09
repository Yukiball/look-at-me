<template>
  <div>
    <img src="~@/assets/logo.png" alt="" />
    <span>欢迎来到我的项目展示页面~</span>
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

<style scoped lang="scss"></style>
