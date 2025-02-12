const maxAscendingSum = (nums) => {
  let maxSum = 0;
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentSum += nums[i];
    } else {
      maxSum = Math.max(maxSum, currentSum);
      currentSum = nums[i];
    }
  }

  return Math.max(maxSum, currentSum);
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]));
console.log(maxAscendingSum([10, 20, 30, 40, 50]));
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12]));
