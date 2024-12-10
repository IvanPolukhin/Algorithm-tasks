const doubleArray = (array) => {
  return array.reduce((acc, num) => {
    acc.push(num * 2);
    return acc;
  }, []);
};

console.log(doubleArray([1, 2, 3, 4, 5, 6]));
