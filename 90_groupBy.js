const groupBy = (arr, fn) => {
  return arr.reduce((acc, val) => {
    const key = fn(val);
    acc[key] = (acc[key] || []).concat(val);
    return acc;
  }, {});
};

const numbers = [6.1, 4.2, 6.3];
console.log(groupBy(numbers, Math.floor));

const words = ["one", "two", "three"];
console.log(groupBy(words, (word) => word.length));

const mixed = [1, "hello", 2, "world", "hi"];
console.log(groupBy(mixed, (item) => typeof item));
