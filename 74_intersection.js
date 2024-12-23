const intersection = (arr1, arr2) => {
  const Set1 = new Set(arr1);
  const Set2 = new Set(arr2);

  const result = [...Set1].filter((num) => Set2.has(num));

  return result;
};

console.log(intersection([1, 2, 3, 4, 5, 6, 7], [2, 2, 4, 5]));
