const find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, val) => acc + val, 0) / array.length;
};

console.log(find_average([1, 2, 3, 4, 5, 6]));
