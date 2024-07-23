const { resolve } = require("core-js/fn/promise");

/*
 * @Author: yukiball yukiball
 * @Date: 2024-07-21 13:26:37
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-21 13:34:31
 * @FilePath: \look-at-me\src\plugin\commonFun\myAsync.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const getData = () =>
  new Promise((resolve) => setTimeout(() => resolve("data"), 1000));
function* fn() {
  const data = yield getData();
  console.log("data: ", data);
  const data2 = yield getData();
  console.log("data2: ", data2);
  return "success";
}
let func = fn();
func.next().then((res) => {
  func.next(res);
});
