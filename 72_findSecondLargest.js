const findSecondLargest = (arr) => {
  if (arr.length === 2) return null;

  const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);

  return uniqueSorted[uniqueSorted.length - 2];
};

console.log(findSecondLargest([10, 20, 30, 40]));
