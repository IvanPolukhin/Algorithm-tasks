const findSecondLargest = (arr) => {
  if (arr.length < 2) return null;

  const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);

  if (uniqueSorted.length < 2) return null;

  return uniqueSorted[uniqueSorted.length - 2];
};

console.log(findSecondLargest([10, 20, 30, 40]));
console.log(findSecondLargest([5, 5, 5, 5]));
console.log(findSecondLargest([1]));
console.log(findSecondLargest([3, 2, 1]));
