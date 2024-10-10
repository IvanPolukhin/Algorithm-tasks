const squareSum = (numbers) => {
  return numbers.map((num) => num * num).reduce((acc, val) => val + acc, 0);
};

console.log(squareSum([1, 2, 3, 4]));
