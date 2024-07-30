// 1. Linear search
// const arr = [1, 4, 5, 6, 8, 5, 1, 2, 7, 5, 2, 11];
// let count = 0;
// function linearSearch(arr, item) {
//   for (let i = 0; i < arr.length; i++) {
//     count += 1;
//     if (arr[i] === item) {
//       return i;
//     }
//   }
//   return null;
// }
// console.log(linearSearch(arr, 8));
// console.log(`count = ${count}`);
// 2. Binary search
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;
function binarySearch(arr, item) {
  count += 1;
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}
console.log(binarySearch(array, 1));
console.log(binarySearch(array, 8));
console.log(binarySearch(array, 99));
console.log(count);
