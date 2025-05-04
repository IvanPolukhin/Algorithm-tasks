const numEquivDominoPairs = (dominoes) => {
    const countMap = {};
    let result = 0;

    for (let [a, b] of dominoes) {
        const key = a < b ? `${a}${b}` : `${b}${a}`;

        if (countMap[key]) {
            result += countMap[key];
            countMap[key]++;
        } else {
            countMap[key] = 1;
        }
    }

    return result;
};

console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]])); // 1
console.log(numEquivDominoPairs([[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]])); // 3
