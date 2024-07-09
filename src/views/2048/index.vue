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
          <!-- <li
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
          </li> -->
          <li
            class="numbox"
            v-for="(val, key, index) of myListObject"
            :key="index"
            :count="key"
          >
            <span :class="boxcolor(val)" v-show="+val">{{ val }}</span>
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
import { Component, Vue, Watch } from "vue-property-decorator";
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
  gameLength = 4;
  score = 0;
  history = 0;
  txt: any; // 应该是HTMLElement，但是还得有初始值。
  rem: Array<any> = [];
  // myList: Array<any> = [];
  myListObject: any = {};
  startX = 0;
  startY = 0;
  endX = 0;
  endY = 0;
  numbox: any;
  showAlert = false;
  endText = "";
  toDirection = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
  };
  get myList() {
    return Object.keys(this.myListObject);
  }
  // boxcolor(i: number, j: number) {
  //   return `num${this.listObj(i, j)}`;
  // }

  boxcolor(val: number) {
    return `num${val}`;
  }
  listObj(i: number, j: number) {
    return this.myListObject[`${i},${j}`];
  }
  mounted() {
    this.init();
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("touchstart", this.myTouchstart);
    document.addEventListener("touchmove", this.myTouchmove);
    document.addEventListener("touchend", this.myTouchend);
  }
  beforeDestroy() {
    document.removeEventListener("keydown", this.keydown);
    document.removeEventListener("touchstart", this.myTouchstart);
    document.removeEventListener("touchmove", this.myTouchmove);
    document.removeEventListener("touchend", this.myTouchend);
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
    for (let i = 0; i < this.gameLength; i++) {
      for (let j = 0; j < this.gameLength; j++) {
        // this.myList.push([i, j]);
        this.$set(this.myListObject, `${i},${j}`, 0);
        // this.myListObject[`${i},${j}`] = 0;
      }
    }
    this.$nextTick(() => {
      this.numbox = $(".numbox");
    });
  }
  getNum() {
    let newArr = [];
    this.rem = [];
    const ran = getRandom(2, 4); //一开始生成几个块
    for (;;) {
      const num = getRandom(0, 15);
      newArr.push(num);
      this.rem = Array.from(new Set(newArr));
      if (this.rem.length === ran) {
        this.addNum(); //初始化
        return;
      }
    }
  }
  addNum() {
    for (let i = 0; i < this.rem.length; i++) {
      let rand = Math.round(Math.random() + 1) * 2;
      let numrem = this.rem[i];
      this.$set(this.myListObject, this.myList[numrem], rand);
    }
  }
  keydown(e: any) {
    switch (e.keyCode) {
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
  checkSame(saveObj: any, newObj: any) {
    for (let val of this.myList) {
      if (saveObj[val] !== newObj[val]) {
        return false;
      }
    }
    return true;
  }
  myOnkeydown(num: 37 | 38 | 39 | 40) {
    let save = { ...this.myListObject };
    this.changeDirection(num);
    if (!this.checkSame(save, this.myListObject)) {
      this.born();
      this.grade();
      this.gameover();
      this.win();
    }
  }
  /**
   * @description: 点击上下左右
   * @param {*} direction
   * @return {*}
   */
  changeDirection(keycode: 37 | 38 | 39 | 40) {
    let direction = this.toDirection[keycode];
    let saveArr = [];
    let newMyList: Array<string> = [];
    let saveLine: number;
    let line: number;
    if (direction === "up" || direction === "down") {
      let useArr: Array<string> = [...this.myList];
      useArr = direction === "up" ? useArr : useArr.reverse();
      for (let i = 0; i < this.gameLength; i++) {
        let e = i;
        let time = 0;
        while (time < this.gameLength) {
          newMyList.push(...useArr.slice(e, e + 1));
          e += this.gameLength;
          time++;
        }
      }
    } else {
      newMyList = [...this.myList];
      newMyList = direction === "right" ? newMyList.reverse() : newMyList;
    }
    if (direction === "left" || direction === "up") {
      saveLine = line = 0;
    } else {
      saveLine = line = this.gameLength - 1;
    }
    newMyList.push("n,n"); // 要不到不了最后一行
    for (let value of newMyList) {
      line =
        direction === "right" || direction === "left"
          ? +value.split(",")[0]
          : +value.split(",")[1];
      if (line === saveLine) {
        saveArr.push(this.myListObject[value]);
      } else {
        const arr = [...saveArr];
        while (arr.includes(0)) {
          arr.splice(arr.indexOf(0), 1);
        }
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === arr[i + 1]) {
            arr[i] = arr[i] * 2;
            this.score += arr[i];
            arr[i + 1] = 0;
            arr.splice(arr.indexOf(0), 1);
          }
        }
        for (let i = 0; i < this.gameLength; i++) {
          if (direction === "left") {
            this.$set(this.myListObject, `${saveLine},${i}`, arr[i] || 0);
          } else if (direction === "right") {
            this.$set(
              this.myListObject,
              `${saveLine},${this.gameLength - i - 1}`,
              arr[i] || 0
            );
          } else if (direction === "up") {
            this.$set(this.myListObject, `${i},${saveLine}`, arr[i] || 0);
          } else {
            this.$set(
              this.myListObject,
              `${this.gameLength - i - 1},${saveLine}`,
              arr[i] || 0
            );
          }
        }

        saveLine = line;
        saveArr = [];
        saveArr.push(this.myListObject[value]);
      }
    }
  }
  /**
   * @description: 每动一下生成一个新的
   * @return {*}
   */
  born() {
    const savespan = [];
    for (let val of this.myList) {
      if (this.myListObject[val] == 0) {
        savespan.push(val);
      }
    }
    let spannum = getRandom(0, savespan.length - 1);
    let rand = Math.round(Math.random() + 1) * 2;
    this.myListObject[savespan[spannum]] = rand;
  }
  /**
   * @description: 分数
   * @return {*}
   */
  grade() {
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
  win() {
    for (let prop of this.myList) {
      if (this.myListObject["" + prop] == 2048) {
        setTimeout(() => {
          this.showAlert = true;
          this.endText = "恭喜通关！";
          this.grade();
        });
      }
    }
  }
  /**
   * @description: 结束
   * @return {*}
   * 如果一个元素和他的右边下变都不相同，就到下一个
   */
  gameover() {
    let row = 0;
    let line = 0;
    let count = 0;
    while (row < this.gameLength) {
      line = 0;
      if (row < this.gameLength - 1) {
        while (line < this.gameLength) {
          if (line < this.gameLength - 1) {
            if (this.myListObject[`${line},${row}`] === 0) {
              count++;
            }

            if (
              this.myListObject[`${line},${row}`] ===
                this.myListObject[`${line + 1},${row}`] ||
              this.myListObject[`${line},${row}`] ===
                this.myListObject[`${line},${row + 1}`]
            ) {
              count++;
            }
          } else {
            if (this.myListObject[`${line},${row}`] === 0) {
              count++;
            }
            if (
              this.myListObject[`${line},${row}`] ===
              this.myListObject[`${line},${row + 1}`]
            ) {
              count++;
            }
          }
          line++;
        }
      } else {
        while (line < this.gameLength) {
          if (this.myListObject[`${line},${row}`] === 0) {
            count++;
          }
          if (line < this.gameLength - 1) {
            if (
              this.myListObject[`${line},${row}`] ===
              this.myListObject[`${line + 1},${row}`]
            ) {
              count++;
            }
          } else {
            if (this.myListObject[`${line},${row}`] === 0) {
              count++;
            }
          }
          line++;
        }
      }
      row++;
    }
    if (count === 0) {
      setTimeout(() => {
        this.endText = "游戏结束!";
        this.showAlert = true;
        this.grade();
      }, 100);
    }
  }
  again() {
    this.score = 0;
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
