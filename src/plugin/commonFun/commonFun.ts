import axios from "axios";
export const getRandom = (min: number, max: number) => {
  const range = max - min;
  const rand = Math.random();
  return min + Math.round(rand * range);
};
export const setCookie = (
  name: string | number,
  value: string | number,
  time: number
) => {
  const oDate = new Date();
  oDate.setDate(oDate.getDate() + time);
  document.cookie = name + "=" + value + ";expires=" + oDate;
};
export const getCookie = (key: string | number) => {
  const arr = document.cookie.split("; ");
  for (let i = 0, len = arr.length; i < len; i++) {
    const temp = arr[i].split("=");
    if (temp[0] == key) {
      return temp[1];
    }
  }
};
export const removeCookie = (key: string | number) => {
  setCookie(key, "", -1);
};
const option = {
  withCredentials: true,
  headers: {
    get: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
    },
    post: {
      "Content-Type": "application/json;charset=utf-8",
      // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
    },
  },
};
export const $post = (url: string, data: any, config: any) => {
  return axios.post(url, data, { ...option, ...config });
};
