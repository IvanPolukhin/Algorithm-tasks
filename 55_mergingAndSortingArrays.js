const array1 = [3, 5, 7, 2, 2];
const array2 = [6, 1, 3, 5, 8];

const mergeAndSortArrays = (...arr) => {
  const mergeArray = [...new Set(arr.flat())];

  return mergeArray.sort((a, b) => a - b);
};

console.log(mergeAndSortArrays(array1, array2));
