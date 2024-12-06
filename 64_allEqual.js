const allEqual = (array) => {
  if (array.length === 0) return true;

  return array.every((i) => i === array[0]);
};

console.log(allEqual([1, 1, 1, 1]));
