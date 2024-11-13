const maxSubArraySum = (array) => {
  return array.reduce(
    (acc, val) => {
      acc["currentSum"] = Math.max(val, acc["currentSum"] + val);
      acc["maxSum"] = Math.max(acc["maxSum"], acc["currentSum"]);
      return acc;
    },
    { currentSum: 0, maxSum: -Infinity }
  ).maxSum;
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(arr));
