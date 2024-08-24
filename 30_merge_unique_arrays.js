function mergeUniqueArrays(...arrays) {
  const totalArray = [].concat(...arrays);
  const uniqueArray = [...new Set(totalArray)];
  return uniqueArray;
}

console.log(mergeUniqueArrays([1, 2, 2, 3], [3, 4, 5], [5, 6, 7]));
