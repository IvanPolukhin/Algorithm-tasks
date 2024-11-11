let arr = [{ num: 3 }, { num: 1 }, { num: 2 }];
let fn = (obj) => obj.num;

const arrSort = (arr, fn) => {
  return arr.slice().sort((a, b) => fn(a) - fn(b));
};

console.log(arrSort(arr, fn));
