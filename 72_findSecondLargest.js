const findSecondLargest = (arr) => {
    if (arr.length < 2) return null;

    const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);

    if (uniqueSorted.length < 2) return null;

    return uniqueSorted[uniqueSorted.length - 2];
};

// Alternative

const findSecondLargest2 = (arr) => {
    const unique = [...new Set(arr)];

    if (unique.length < 2) return null;

    let max = -Infinity;
    let second = -Infinity;

    for (let num of unique) {
        if (num > max) {
            second = max;
            max = num;
        } else if (num > second) {
            second = num;
        }
    }

    return second;
};

console.log(findSecondLargest([10, 20, 30, 40]));
console.log(findSecondLargest([5, 5, 5, 5]));
console.log(findSecondLargest([1]));
console.log(findSecondLargest([3, 2, 1]));

console.log(findSecondLargest2([10, 20, 30, 40]));
console.log(findSecondLargest2([5, 5, 5, 5]));
console.log(findSecondLargest2([1]));
console.log(findSecondLargest2([3, 2, 1]));
