<template>
  <div
    class="game"
    @keydown="keydown"
    @touchstart="myTouchstart"
    @touchmove="myTouchmove"
    @touchend="myTouchend"
  >
    <div id="logo">
      <img src="~@/assets/yuki.png" />
      <div>扫描这里试玩手机版</div>
    </div>
    <div class="wrapper">
      <div class="top">
        <div class="grade">
          <div class="now">
            分数
            <div class="rem">{{ score }}</div>
          </div>
          <div class="history">
            历史最高分数
            <div class="rem">{{ history }}</div>
          </div>
        </div>
        <h1 class="number">2048</h1>
      </div>
      <div class="text">将相同数字融合相加，得到 2048 获胜!</div>
      <div class="box">
        <ul class="con">
          <li
            class="numbox"
            v-for="(value, index) of myList"
            :key="index"
            :count="`${value[0]},${value[1]}`"
            :line="value[0]"
            :list="value[1]"
          >
            <span
              :class="boxcolor(value[0], value[1])"
              v-show="+listObj(value[0], value[1])"
              >{{ listObj(value[0], value[1]) }}</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="aleart" v-if="showAlert">
      <span class="over">{{ endText }}</span
      ><span class="score">您的分数为:{{ score }}</span
      ><span class="agin" @click="again">再来一次</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  getRandom,
  setCookie,
  getCookie,
  removeCookie,
  $,
  $$,
} from "@/plugin/commonFun/commonFun";
@Component
export default class HelloWorld extends Vue {
  score = 0;
  history = 0;
  count = 0;
  txt: any; // 应该是HTMLElement，但是还得有初始值。
  rem: Array<any> = [];
  myList: Array<any> = [];
  myListObject: any;
  startX = 0;
  startY = 0;
  endX = 0;
  endY = 0;
  numbox: any;
  arr1: Array<any> = [];
  arr2: Array<any> = [];
  arr3: Array<any> = [];
  arr4: Array<any> = [];

  newarr1: Array<any> = [];
  newarr2: Array<any> = [];
  newarr3: Array<any> = [];
  newarr4: Array<any> = [];
  showAlert = false;
  endText = "";

  boxcolor(i: number, j: number) {
    return `num${this.listObj(i, j)}`;
  }
  listObj(i: number, j: number) {
    return this.myListObject[`${i},${j}`];
  }
  mounted() {
    this.init();
  }
  init() {
    this.getDom();
    this.grade();
  }
  getDom() {
    this.setDom();
    this.getNum();
  }
  setDom() {
    this.myListObject = {};
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.myList.push([i, j]);
        this.myListObject[`${i},${j}`] = 0;
      }
    }
    this.$nextTick(() => {
      this.numbox = $(".numbox");
    });
  }
  getNum() {
    let newArr = [];
    const ran = getRandom(2, 4); //一开始生成几个块
    for (let i = 0; i < 100; i++) {
      const num = getRandom(1, 16);
      newArr.push(num);
      this.rem = Array.from(new Set(newArr));
      if (this.rem.length === ran) {
        this.addNum(); //初始化
      }
    }
  }
  addNum() {
    console.log(this.rem);
    for (let i = 0; i < this.rem.length; i++) {
      let rand = Math.round(Math.random() + 1) * 2;
      let numrem = this.rem[i] - 1;
      this.myListObject["" + this.myList[numrem]] = String(rand);
    }
  }
  keydown(e: any) {
    switch (e.which) {
      case 37:
        this.myOnkeydown(37);
        break; //左
      case 38:
        this.myOnkeydown(38);
        break; //上
      case 39:
        this.myOnkeydown(39);
        break; //右
      case 40:
        this.myOnkeydown(40);
        break; //下
    }
  }
  myTouchstart(e: any) {
    e.preventDefault();
    let touch = e.touches[0];
    this.startY = touch.clientY;
    this.startX = touch.clientX;
    this.endY = touch.clientY;
    this.endX = touch.clientX;
  }
  myTouchmove(e: any) {
    e.preventDefault();
    let touch = e.touches[0];
    this.endY = touch.clientY;
    this.endX = touch.clientX;
  }
  myTouchend() {
    if (
      this.endY - this.startY > 50 &&
      Math.abs(this.endX - this.startX) < this.endY - this.startY
    ) {
      this.myOnkeydown(40);
    } else if (
      this.endY - this.startY < -50 &&
      Math.abs(this.endX - this.startX) < Math.abs(this.endY - this.startY)
    ) {
      this.myOnkeydown(38);
    } else if (
      this.endX - this.startX > 50 &&
      Math.abs(this.endY - this.startY) < this.endX - this.startX
    ) {
      this.myOnkeydown(39);
    } else if (
      this.endX - this.startX < -50 &&
      Math.abs(this.endY - this.startY) < Math.abs(this.endX - this.startX)
    ) {
      this.myOnkeydown(37);
    }
  }
  myOnkeydown(num: number) {
    const savearr1 = [];
    const savearr2 = [];
    const savearr3 = [];
    const savearr4 = [];
    const arrlist1 = [];
    const arrlist2 = [];
    const arrlist3 = [];
    const arrlist4 = [];
    let save1 = [];
    let save2 = [];
    let save3 = [];
    let save4 = [];
    if (num == 37) {
      this.leftright();
      for (let i = 0; i < 4; i++) {
        savearr1.push($(this.arr1[i]).children().text());
        savearr2.push($(this.arr2[i]).children().text());
        savearr3.push($(this.arr3[i]).children().text());
        savearr4.push($(this.arr4[i]).children().text());
      }
      for (let i = 0; i < 4; i++) {
        arrlist1[i] = savearr1[i];
        arrlist2[i] = savearr2[i];
        arrlist3[i] = savearr3[i];
        arrlist4[i] = savearr4[i];
      }
      save1 = this.changArray(savearr1);
      save2 = this.changArray(savearr2);
      save3 = this.changArray(savearr3);
      save4 = this.changArray(savearr4);
      for (let j = 0; j < 4; j++) {
        $(this.arr1[j]).children().text(save1[j]);
        $(this.arr2[j]).children().text(save2[j]);
        $(this.arr3[j]).children().text(save3[j]);
        $(this.arr4[j]).children().text(save4[j]);
      }
      if (
        String(arrlist1) !== String(savearr1) ||
        String(arrlist2) !== String(savearr2) ||
        String(arrlist3) !== String(savearr3) ||
        String(arrlist4) !== String(savearr4)
      ) {
        this.born();
      }
      this.grade();
      this.gameover(37);
      this.win();
    } else if (num == 38) {
      this.updown();
      for (let i = 0; i < 4; i++) {
        savearr1.push($(this.newarr1[i]).children().text());
        savearr2.push($(this.newarr2[i]).children().text());
        savearr3.push($(this.newarr3[i]).children().text());
        savearr4.push($(this.newarr4[i]).children().text());
      }
      for (let i = 0; i < 4; i++) {
        arrlist1[i] = savearr1[i];
        arrlist2[i] = savearr2[i];
        arrlist3[i] = savearr3[i];
        arrlist4[i] = savearr4[i];
      }
      save1 = this.changArray(savearr1);
      save2 = this.changArray(savearr2);
      save3 = this.changArray(savearr3);
      save4 = this.changArray(savearr4);
      for (let j = 0; j < 4; j++) {
        $(this.newarr1[j]).children().text(save1[j]);
        $(this.newarr2[j]).children().text(save2[j]);
        $(this.newarr3[j]).children().text(save3[j]);
        $(this.newarr4[j]).children().text(save4[j]);
      }
      if (
        String(arrlist1) !== String(savearr1) ||
        String(arrlist2) !== String(savearr2) ||
        String(arrlist3) !== String(savearr3) ||
        String(arrlist4) !== String(savearr4)
      ) {
        this.born();
      }
      this.grade();
      this.gameover(38);
      this.win();
    } else if (num == 39) {
      this.leftright();
      for (let x = 3; x > -1; x--) {
        savearr1.push($(this.arr1[x]).children().text());
        savearr2.push($(this.arr2[x]).children().text());
        savearr3.push($(this.arr3[x]).children().text());
        savearr4.push($(this.arr4[x]).children().text());
      }
      for (let i = 0; i < 4; i++) {
        arrlist1[i] = savearr1[i];
        arrlist2[i] = savearr2[i];
        arrlist3[i] = savearr3[i];
        arrlist4[i] = savearr4[i];
      }
      save1 = this.changArray(savearr1).reverse();
      save2 = this.changArray(savearr2).reverse();
      save3 = this.changArray(savearr3).reverse();
      save4 = this.changArray(savearr4).reverse();
      for (let j = 3; j > -1; j--) {
        $(this.arr1[j]).children().text(save1[j]);
        $(this.arr2[j]).children().text(save2[j]);
        $(this.arr3[j]).children().text(save3[j]);
        $(this.arr4[j]).children().text(save4[j]);
      }
      if (
        String(arrlist1.reverse()) !== String(savearr1) ||
        String(arrlist2.reverse()) !== String(savearr2) ||
        String(arrlist3.reverse()) !== String(savearr3) ||
        String(arrlist4.reverse()) !== String(savearr4)
      ) {
        this.born();
      }
      this.grade();
      this.gameover(39);
      this.win();
    } else if (num == 40) {
      this.updown();
      for (let x = 3; x > -1; x--) {
        savearr1.push($(this.newarr1[x]).children().text());
        savearr2.push($(this.newarr2[x]).children().text());
        savearr3.push($(this.newarr3[x]).children().text());
        savearr4.push($(this.newarr4[x]).children().text());
      }
      for (let i = 0; i < 4; i++) {
        arrlist1[i] = savearr1[i];
        arrlist2[i] = savearr2[i];
        arrlist3[i] = savearr3[i];
        arrlist4[i] = savearr4[i];
      }
      save1 = this.changArray(savearr1).reverse();
      save2 = this.changArray(savearr2).reverse();
      save3 = this.changArray(savearr3).reverse();
      save4 = this.changArray(savearr4).reverse();
      for (let j = 3; j > -1; j--) {
        $(this.newarr1[j]).children().text(save1[j]);
        $(this.newarr2[j]).children().text(save2[j]);
        $(this.newarr3[j]).children().text(save3[j]);
        $(this.newarr4[j]).children().text(save4[j]);
      }
      if (
        String(arrlist1.reverse()) !== String(savearr1) ||
        String(arrlist2.reverse()) !== String(savearr2) ||
        String(arrlist3.reverse()) !== String(savearr3) ||
        String(arrlist4.reverse()) !== String(savearr4)
      ) {
        this.born();
      }
      this.grade();
      this.gameover(40);
      this.win();
    }
  }
  //按下左右之后
  leftright() {
    this.arr1 = [];
    this.arr2 = [];
    this.arr3 = [];
    this.arr4 = [];
    for (let prop of this.numbox) {
      let saveline = $(prop).attr("line");
      if (saveline == 1) {
        this.arr1.push(prop);
      } else if (saveline == 2) {
        this.arr2.push(prop);
      } else if (saveline == 3) {
        this.arr3.push(prop);
      } else if (saveline == 4) {
        this.arr4.push(prop);
      }
    }
  }
  //按下上下之后
  updown() {
    this.newarr1 = [];
    this.newarr2 = [];
    this.newarr3 = [];
    this.newarr4 = [];
    for (let prop of this.numbox) {
      let savelist = $(prop).attr("list");
      if (savelist == 1) {
        this.newarr1.push(prop);
      } else if (savelist == 2) {
        this.newarr2.push(prop);
      } else if (savelist == 3) {
        this.newarr3.push(prop);
      } else if (savelist == 4) {
        this.newarr4.push(prop);
      }
    }
  }
  //算法
  changArray(array: any): Array<any> {
    let newarray = array;
    for (let i = 0; i < 4; i++) {
      if (array[i] == "0") {
        array.splice(i, 1);
        i--;
      }
    }
    if (array.length == 0) {
      array.push("0", "0", "0", "0");
    } else if (array.length == 1) {
      array.push("0", "0", "0");
    } else if (array.length == 2) {
      if (array[0] == array[1]) {
        array[0] = String(Number(array[0]) * 2);
        array[1] = "0";
        this.score += Number(array[0]);
      }
      array.push("0", "0");
    } else if (array.length == 3) {
      if (array[0] == array[1]) {
        array[0] = String(parseInt(array[0]) * 2);
        array[1] = array[2];
        array[2] = "0";
        this.score += Number(array[0]);
      } else if (array[0] !== array[1] && array[1] == array[2]) {
        array[1] = String(parseInt(array[1]) * 2);
        array[2] = "0";
        this.score += Number(array[1]);
      }
      array.push("0");
    } else if (array.length == 4) {
      if (array[0] == array[1]) {
        array[0] = String(parseInt(array[0]) * 2);
        this.score += Number(array[0]);
        if (array[2] == array[3]) {
          array[2] = String(Number(array[2]) * 2);
          array[3] = "0";
          this.score += Number(array[2]);
        }
        array[1] = array[2];
        array[2] = array[3];
        array[3] = "0";
      } else if (array[0] !== array[1]) {
        if (array[1] == array[2]) {
          array[1] = String(parseInt(array[1]) * 2);
          array[2] = array[3];
          array[3] = "0";
          this.score += Number(array[1]);
        } else if (array[2] == array[3]) {
          array[2] = String(Number(array[2]) * 2);
          array[3] = "0";
          this.score += Number(array[2]);
        }
      }
    }
    return newarray;
  }
  //每动一下生成一个新的
  born() {
    const savespan = [];
    for (let span of this.txt) {
      if ($(span).text() == "0") {
        savespan.push($(span));
      }
    }
    let spannum = getRandom(0, savespan.length - 1);
    let rand = Math.round(Math.random() + 1) * 2;
    savespan[spannum].text(String(rand));
  }
  /**
   * @description: 分数
   * @return {*}
   */
  grade() {
    if (!window.localStorage) {
      console.log("浏览器不支持localstorage,采用cookie");
      const cookie = document.cookie;
      if (!cookie) {
        setCookie(this.score, 0, 80);
        this.history = 0;
      } else {
        this.history = Number(getCookie(this.score)) || 0;
        if (this.score > this.history) {
          removeCookie(this.score);
          setCookie(this.score, Number(this.score), 80);
          this.history = Number(getCookie(this.score));
        }
      }
    } else {
      const storage = window.localStorage;
      if (!storage.score) {
        storage.score = 0;
        this.history = 0;
      } else {
        this.history = storage.score;
        if (this.score > this.history) {
          storage.score = this.score;
          this.history = this.score;
        }
      }
    }
  }
  win() {
    for (let prop of this.txt) {
      if ($(prop).text() == "2048") {
        setTimeout(() => {
          $(document).off("keydown");
          this.showAlert = true;
          this.endText = "恭喜通关！";

          this.grade();
        });
      }
    }
  }
  gameover(num: any) {
    let proparr = [];
    let truelist = [];
    let savearr1 = [];
    let savearr2 = [];
    let savearr3 = [];
    let savearr4 = [];
    let savearr5 = [];
    let savearr6 = [];
    let savearr7 = [];
    let savearr8 = [];
    for (let prop of this.txt) {
      proparr.push(Number($(prop).text()));
    }
    for (let i = 0; i < proparr.length; i++) {
      if (proparr[i] == 0) {
        proparr.splice(i, 1);
        i--;
      }
    }
    this.updown();
    this.leftright();
    for (let i = 0; i < 4; i++) {
      savearr1.push($(this.newarr1[i]).children().text());
      savearr2.push($(this.newarr2[i]).children().text());
      savearr3.push($(this.newarr3[i]).children().text());
      savearr4.push($(this.newarr4[i]).children().text());
      savearr5.push($(this.arr1[i]).children().text());
      savearr6.push($(this.arr2[i]).children().text());
      savearr7.push($(this.arr3[i]).children().text());
      savearr8.push($(this.arr4[i]).children().text());
    }
    if (
      proparr.length == 16 &&
      savearr1[0] !== savearr1[1] &&
      savearr1[1] !== savearr1[2] &&
      savearr1[2] !== savearr1[3] &&
      savearr2[0] !== savearr2[1] &&
      savearr2[1] !== savearr2[2] &&
      savearr2[2] !== savearr2[3] &&
      savearr3[0] !== savearr3[1] &&
      savearr3[1] !== savearr3[2] &&
      savearr3[2] !== savearr3[3] &&
      savearr4[0] !== savearr4[1] &&
      savearr4[1] !== savearr4[2] &&
      savearr4[2] !== savearr4[3] &&
      savearr5[0] !== savearr5[1] &&
      savearr5[1] !== savearr5[2] &&
      savearr5[2] !== savearr5[3] &&
      savearr6[0] !== savearr6[1] &&
      savearr6[1] !== savearr6[2] &&
      savearr6[2] !== savearr6[3] &&
      savearr7[0] !== savearr7[1] &&
      savearr7[1] !== savearr7[2] &&
      savearr7[2] !== savearr7[3] &&
      savearr8[0] !== savearr8[1] &&
      savearr8[1] !== savearr8[2] &&
      savearr8[2] !== savearr8[3]
    ) {
      this.count++;
    }
    if (this.count == 1) {
      $(document).off("keydown");

      setTimeout(() => {
        console.log(1);
        this.endText = "游戏结束!";
        this.showAlert = true;
        this.grade();
      }, 100);
    }
  }
  again() {
    this.showAlert = false;
    this.myListObject = {};
    this.init();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./index.scss";
</style>
