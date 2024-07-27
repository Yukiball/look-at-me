let timer: any = null;
const textarea = document.createElement("textarea");

export const copy = {
  bind(el: any, binding: any, vnode: any) {
    console.log("bind");
    console.log(el, binding, vnode);
    textarea.value = binding.value || "";
    el.addEventListener("mousedown", handler);
    el.addEventListener("mouseup", clear);
  },
  update(el: any, binding: any, vnode: any) {
    console.log("componentUpdated");
    console.log(el, binding, vnode);
    textarea.value = binding.value || "";
  },
  unbind(el: any) {
    el.removeEventListener("mousedown", handler);
    el.removeEventListener("mouseup", clear);
  },
};
function handler(text: string | undefined) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const result = document.execCommand("Copy");
    console.log(result);
    if (result) {
      alert("复制成功" + result);
    }
    document.body.removeChild(textarea);
    // navigator.clipboard
    //   .writeText(textarea.value)
    //   .then(() => {
    //     window.alert("复制成功");
    //   })
    //   .catch((error) => {
    //     window.alert("复制失败");
    //   });
  }, 1000);
}
function clear() {
  console.log("clear");
  clearTimeout(timer);
}
