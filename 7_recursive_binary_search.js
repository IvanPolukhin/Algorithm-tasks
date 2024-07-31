const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
let count = 0;

arr.sort((a, b) => a - b);
function recursiveBinarySearch(array, item, start, end) {
  count++;
  if (start > end) {
    return -1;
  }
  let middle = Math.floor((start + end) / 2);
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, start, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

console.log(recursiveBinarySearch(arr, 3, 0, arr.length));
console.log(`count: ${count}`);
