const arr = [10, 20, 30, 40];
const fn = (num, i) => num > 20;

const filter = function (arr, fn) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

console.log(filter(arr, fn));
