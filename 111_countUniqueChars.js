const countUniqueChars = (str) => {
    const uniqueChars = {};
    let count = 0;

    for (let char of str) {
        if (!uniqueChars[char]) {
            uniqueChars[char] = char;
            count++;
        }
    }

    return count;
};

console.log(countUniqueChars("hheello"));
