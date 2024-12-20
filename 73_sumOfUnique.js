const sumOfUnique = (nums) => {
  const obj = {};

  for (const num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }

  return Object.keys(obj)
    .filter((key) => obj[key] === 1)
    .reduce((acc, key) => acc + parseInt(key), 0);
};

console.log(sumOfUnique([1, 2, 3, 2]));
