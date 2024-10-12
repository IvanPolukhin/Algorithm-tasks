let fn = (a, b, c) => a + b + c;
const once = (fn) => {
  let call = false;

  return function (...args) {
    return !call ? ((call = true), fn(...args)) : "undefined";
  };
};
let onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 3));
