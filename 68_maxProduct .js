const maxProduct = (array) => {
  array.sort((a, b) => a - b);

  const n = array.length;
  const product1 = array[n - 1] * array[n - 2];
  const product2 = array[0] * array[1];

  return Math.max(product1, product2);
};

console.log(maxProduct([1, 2, 3, 4]));
console.log(maxProduct([-1, -2, -3, -4]));
console.log(maxProduct([0, 1, 2, 3]));
console.log(maxProduct([5, 7, -8, -6, 0]));
