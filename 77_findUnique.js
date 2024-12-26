const findUnique = (arr1, arr2) => {
  const combine = [...arr1, ...arr2];

  const count = combine.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(count)
    .filter((key) => count[key] === 1)
    .map(Number);
};

console.log(findUnique([1, 2, 3, 4, 5, 6, 8, 9, 0], [1, 2, 3, 4, 5, 6, 7]));
