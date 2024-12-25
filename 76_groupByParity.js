const groupByParity = (arr) => {
  return arr.reduce(
    (acc, num) => {
      num % 2 === 0 ? acc.even.push(num) : acc.odd.push(num);
      return acc;
    },
    { even: [], odd: [] }
  );
};

console.log(groupByParity([1, 2, 3, 4, 5, 6, 7, 8, 9]));
