const arrayToString = (arr) => {
    return arr.reduce((acc, val, i) => acc + (i ? ', ' : '') + String(val), '')
    // arr.join(", ");
    // arr.map(String).join(", ");
    // JSON.stringify(arr).slice(1, -1);
};

console.log(arrayToString([1, 2, 3])); // "1, 2, 3"
