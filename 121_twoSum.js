const twoSum = (nums, target) => {
    const numSet = new Set();
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numSet.has(complement)) {
            return [numMap[complement], i]
        }

        numSet.add(nums[i]);
        numMap[nums[i]] = i;
    }

    return null
};

console.log(twoSum([2, 7, 11, 15], 26));
