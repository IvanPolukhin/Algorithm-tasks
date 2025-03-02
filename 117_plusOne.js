const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;

        if (digits[i] < 10) {
            return digits;
        }

        digits[i] = 0;
    }

    digits.unshift(1);
    return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 9]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([0]));
console.log(plusOne([8, 9]));
