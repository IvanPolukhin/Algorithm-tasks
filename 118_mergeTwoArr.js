const mergeTwoArr = (arr1, arr2) => {
    const merge = [...arr1, ...arr2];
    return merge.sort((a, b) => a - b);
};

console.log(mergeTwoArr([1, 2, 2, 3], [1, 3, 4, 5, 4]));
