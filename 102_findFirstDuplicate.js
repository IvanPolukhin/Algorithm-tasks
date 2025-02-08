const findFirstDuplicate = (arr) => {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }

  return null;
};

console.log(findFirstDuplicate([1, 2, 3, 4, 4, 5, 6, 6, 7]));
