function createCounter(n) {
  let counter = n;
  return function () {
    return counter++;
  };
}
const counter = createCounter(11);
console.log(counter()); // 11
console.log(counter()); // 12
console.log(counter()); // 13
