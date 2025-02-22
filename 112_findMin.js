const findMin = (arr) => {
    return Math.min(...arr);
};

console.log(findMin([1, 2, 3, 4, 5]));

const findMin2 = (arr) => {
    return arr.length === 0
        ? null
        : (() => {
            let min = arr[0];

            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
            }

            return min;
        })();
};

console.log(findMin2([1, 2, 3, 4, 5]));
