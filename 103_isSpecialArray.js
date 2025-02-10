const isSpecialArray = (arr) => {
  return arr.slice(1).every((el, i) => arr[i] % 2 !== el % 2);
};

console.log(isSpecialArray([1, 2, 3, 4]));
console.log(isSpecialArray([2, 4, 6, 8]));
console.log(isSpecialArray([1, 3, 5, 7]));
console.log(isSpecialArray([7, 6, 3, 8, 1, 2]));
