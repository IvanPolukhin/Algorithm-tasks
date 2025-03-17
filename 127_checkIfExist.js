const checkIfExist = (arr) => {
    let seen = new Set();

    for (let num of arr) {
        if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
            return true;
        }

        seen.add(num);
    }

    return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([7, 2, 14, 11]));
console.log(checkIfExist([3, 1, 7, 11]));
