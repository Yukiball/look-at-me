/*
 * @Author: yukiball yukiball
 * @Date: 2024-07-22 11:34:30
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-22 11:44:08
 * @FilePath: \look-at-me\src\plugin\commonFun\myPromise.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
let isPromiseLike = function (argu) {
  return !!(
    argu !== null &&
    (typeof argu === "object" || typeof argu === "function") &&
    typeof argu.then === "function"
  );
};
Promise.resolve = function (argu) {
  if (argu instanceof Promise) {
    return argu;
  } else {
    return new Promise((reslove, reject) => {
      if (isPromiseLike(argu)) {
        argu.then(reslove, reject);
      } else {
        reslove(argu);
      }
    });
  }
};
