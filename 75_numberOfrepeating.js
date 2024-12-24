const numberOfRepeating1 = (arr) => {
  const obj = {};

  for (num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }

  return obj;
};

// Alternative solution

const numberOfRepeating2 = (arr) => {
  return arr.reduce((acc, num) => ((acc[num] = (acc[num] || 0) + 1), acc), {});
};

console.log(numberOfRepeating1([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]));
console.log(numberOfRepeating2([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]));
