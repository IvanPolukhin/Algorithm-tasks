const items = ["apple", "banana", "apple", "orange", "banana", "kiwi"];

const findDuplicates = (arr) => {
    let result = [];
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        seen.has(arr[i]) ? result.push(arr[i]) : seen.add(arr[i]);
    }
    return result;
};

console.log(findDuplicates(items)); // ["apple", "banana"]
