let add = function (...argu) {
  let arr = [...argu];

  function adder() {
    arr.push(...arguments);
    return adder;
  }
  adder.toString = function () {
    return arr.reduce((a, b) => a + b);
  };
  return adder;
};
console.log(add(1, 2)(3).toString());
