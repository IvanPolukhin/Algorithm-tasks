const groupByLength = (arr) => {
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    !arr.every((el) => typeof el === "string")
  ) {
    return "Please provide a valid array of strings";
  }

  return arr.reduce((acc, str) => {
    const key = str.length;
    acc[key] = acc[key] || [];
    acc[key].push(str);
    return acc;
  }, {});
};

console.log(groupByLength(["a", "b", "c", "de", "f", "gh", 1, "klm"]));
console.log(groupByLength(["a", "b", "c", "de", "f", "gh", "adasdd", "klms"]));
