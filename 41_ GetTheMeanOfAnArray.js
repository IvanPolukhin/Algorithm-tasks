const getAverage = (marks) =>
  Math.floor(marks.reduce((acc, val) => acc + val, 0) / marks.length);

console.log(getAverage([1, 2, 3, 4, 5]));
