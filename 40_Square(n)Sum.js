const squareSum = (numbers) => {
  return numbers.reduce((acc, val) => acc + val * val, 0);
};

console.log(squareSum([1, 2, 3, 4]));
