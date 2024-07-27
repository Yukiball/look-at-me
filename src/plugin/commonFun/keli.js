/*
 * @Author: yukiball yukiball
 * @Date: 2024-07-23 18:26:46
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-28 00:28:46
 * @FilePath: \look-at-me\src\plugin\commonFun\keli.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// let add = function (...argu) {
//   let arr = [...argu];

//   function adder() {
//     arr.push(...arguments);
//     return adder;
//   }
//   adder.toString = function () {
//     return arr.reduce((a, b) => a + b);
//   };
//   return adder;
// };

// function add(...arg) {
//   let arr = [...arg];
//   function adder(...args) {
//     arr = [...arr, ...args];
//     return adder;
//   }
//   adder.toString = function () {
//     return arr.reduce((a, b) => a + b);
//   };
//   return adder;
// }
// console.log(+add(1, 2, 3)(3)(3));

// let dobanceF = function () {
//   let timer = null;
//   return function dobance(fn, delay) {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// };
// let dobance = dobanceF();
// dobance(() => {
//   console.log(1);
// }, 1000);
// dobance(() => {
//   console.log(1);
// }, 1100);
// dobance(() => {
//   console.log(1);
// }, 1200);
// dobance(() => {
//   console.log(1);
// }, 1300);

// let waterF = function () {
//   let key = false;
//   return (fn, delay) => {
//     if (!key) {
//       key = true;
//       let timer = setTimeout(() => {
//         fn();
//         clearTimeout(timer);
//         key = false;
//       }, delay);
//     } else {
//       return false;
//     }
//   };
// };

// let water = waterF();
// setInterval(() => {
//   water(() => {
//     console.log(1);
//   }, 3000);
//   console.log(2);
// }, 1000);

// function myNew() {
//   let argu = [...arguments];
//   let con = argu.shift();
//   let obj = Object.create(con.prototype);
//   let result = con.apply(obj, argu);
//   return result;
// }
// let a = myNew(Object);
// console.log(a);

// Function.prototype.myCall = function (obj, ...argu) {
//   const context = obj;
//   let fn = Symbol();
//   context[fn] = this;
//   const result = context[fn](...argu);
//   delete context[fn];
//   return result;
// };

// let obj = {
//   a: 2,
//   b: function () {
//     console.log(this.a);
//   },
// };
// obj.b();
// let c = obj.b;
// c.myCall(obj);

// Function.prototype.myBind = function (obj, ...arg) {
//   return (...argu) => {
//     this.myCall(obj, ...arg, ...argu);
//   };
// };

// const shuffle = (arr) => {
//   let i = arr.length;
//   let j;
//   while (i) {
//     j = Math.floor(Math.random() * i--);
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// };
// shuffle([1, 2, 3, 4, 5, 6]);
