const mergeTowLists = (list1 = [], list2 = []) => {
    const merge = [...list1, ...list2];

    return merge.sort((a, b) => a - b);
};

console.log(mergeTowLists([1, 4], [2, 3]));
