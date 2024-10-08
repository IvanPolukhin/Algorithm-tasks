const arr = [1, 2, 3];
const fn = (x, index) => x + index;

const map = function (arr, fn) {
  const returnedArray = [];
  for (let i = 0; i < arr.length; i++) {
    returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
};

console.log(map(arr, fn));
