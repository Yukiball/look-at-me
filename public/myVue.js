/*
 * @Author: yukiball yukiball
 * @Date: 2024-07-12 17:54:07
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-13 20:58:11
 * @FilePath: \look-at-me\public\myVue.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const someBody = {
  myName: "yuki",
  age: 18,
};
observer(someBody);
function changeName() {
  let dom = document.querySelector("#name");
  dom.innerHTML = someBody.myName;
}

function changeAge() {
  let dom = document.querySelector("#age");
  dom.innerHTML = someBody.age;
}
function changeInput() {
  let dom = document.querySelector("#input");
  dom.value = someBody.myName;
}
function observer(obj) {
  for (const key in obj) {
    let internalValue = obj[key];
    const func = new Set(); // 保证方法唯一
    Object.defineProperty(obj, key, {
      get: function () {
        if (window.__func) {
          func.add(window.__func);
        }
        return internalValue;
      },
      set: function (val) {
        internalValue = val;
        for (let value of func.values()) {
          value();
        }
      },
    });
  }
}
window.__func = null;

function action(fn) {
  window.__func = fn;
  fn();
  window.__func = null;
}
action(changeName);
action(changeAge);
action(changeInput);
