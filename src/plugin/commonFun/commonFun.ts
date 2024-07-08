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

export const $ = (name: any) => {
  return document.querySelector(name);
};
export const $$ = (name: any) => {
  return document.querySelectorAll(name);
};
