const countSubarrays = (nums) => {
    return nums.reduce((count, _num, i) => {
        if (i <= nums.length - 3) {
            const first = nums[i];
            const middle = nums[i + 1];
            const third = nums[i + 2];

            if (first + third === middle / 2) {
                count++;
            }
        }

        return count;
    }, 0);
};

console.log(countSubarrays([1, 2, 1, 4, 1]));

// Alternative

const countSubarraysAlternative = (nums) => {
    let res = 0;

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] + nums[i + 1] === nums[i] / 2) {
            count++;
        }
    }

    return res;
};

console.log(countSubarraysAlternative([1, 2, 1, 4, 1]));
