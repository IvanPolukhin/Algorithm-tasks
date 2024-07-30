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
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let count = 0;
// function binarySearch(arr, item) {
//   count += 1;
//   let start = 0;
//   let end = arr.length;
//   let middle;
//   let found = false;
//   let position = -1;
//   while (found === false && start <= end) {
//     middle = Math.floor((start + end) / 2);
//     if (arr[middle] === item) {
//       found = true;
//       position = middle;
//       return position;
//     }
//     if (item < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }
//   return position;
// }
// console.log(binarySearch(array, 1));
// console.log(binarySearch(array, 8));
// console.log(binarySearch(array, 99));
// console.log(count);
// 3. Selection sort
const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
let count = 0;
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}
console.log(selectionSort(arr));
console.log(arr.length);
console.log(`count: ${count}`);
