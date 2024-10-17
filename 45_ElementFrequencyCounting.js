const array = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5, 4, 5, 6, 7, 8, 8, 8];

const countFrequency = (arr) => {
  return arr.reduce((acc, val) => {
    if (acc[val]) {
      acc[val] += 1;
    } else {
      acc[val] = 1;
    }
    return acc;
  }, {});
};

console.log(countFrequency(array));
