const applyOperations = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    const result = nums.filter((num) => num !== 0);

    while (result.length < nums.length) {
        result.push(0);
    }

    return result;
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
