/*
 * @Author: yukiball yukiball
 * @Date: 2024-07-27 23:43:42
 * @LastEditors: yukiball yukiball
 * @LastEditTime: 2024-07-28 00:19:33
 * @FilePath: \look-at-me\src\directives\focus.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
export const myfocus = {
  inserted(el: any, binding: any, vnode: any) {
    console.log("inserted");
    el.focus();
  },
  bind(el: any, binding: any, vnode: any) {
    console.log("bind");
  },
  update(el: any, binding: any, vnode: any) {
    console.log("update");
  },
  componentUpdated(el: any, binding: any, vnode: any) {
    console.log("componentUpdated", binding);
  },
  unbind() {},
};
