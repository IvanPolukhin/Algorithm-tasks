const isHappy = (n) => {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getSumOfSquares(n);
    }

    return n === 1;
};

const getSumOfSquares = (num) => {
    let sum = 0;

    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }

    return sum;
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(13));
