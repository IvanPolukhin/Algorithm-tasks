const unique = (arr) => {
  return arr.filter((el, i) => arr.indexOf(el) === i);
};

console.log(
  unique([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0])
);
