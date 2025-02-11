const checkRotatedSorted = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) {
      count++;
    }
  }

  return count <= 1;
};

console.log(checkRotatedSorted([3, 4, 5, 1, 2]));
console.log(checkRotatedSorted([2, 1, 3, 4]));
console.log(checkRotatedSorted([2, 3, 1, 5, 4]));
console.log(checkRotatedSorted([1, 2, 3, 4, 5]));
console.log(checkRotatedSorted([1, 1, 1, 1, 1]));
