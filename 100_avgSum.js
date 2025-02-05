const avgSum = (arr) => {
  return arr.reduce((a, b) => a + b / arr.length, 0);
};

console.log(avgSum([1, 2, 3, 4, 5]));
