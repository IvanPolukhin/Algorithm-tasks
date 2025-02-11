const longestMonotonicSubarray = (nums) => {
  let inc = 1;
  let dec = 1;
  let max = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      inc += 1;
      dec = 1;
    } else if (nums[i] < nums[i - 1]) {
      dec += 1;
      inc = 1;
    } else {
      dec = 1;
      inc = 1;
    }

    max = Math.max(max, inc, dec);
  }

  return max;
};

console.log(longestMonotonicSubarray([1, 2, 3, 4, 5, 10, 6, 7, 8, 9]));
console.log(longestMonotonicSubarray([5, 4, 3, 2, 1]));
console.log(longestMonotonicSubarray([1, 3, 2, 1, 4, 5]));
console.log(longestMonotonicSubarray([1, 2, 2, 3]));
console.log(longestMonotonicSubarray([1]));
