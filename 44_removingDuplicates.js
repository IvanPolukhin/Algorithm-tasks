const array = [1, 2, 2, 3, 4, 4, 5];

const removingDuplicates = (arr) =>
  arr.filter((val, index) => arr.indexOf(val) === index);

console.log(removingDuplicates(array));
