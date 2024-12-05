// use for
let array = [1, 2, 3, 4, 5];
let sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// use reduce
const sumArrayWithReduce = (arr) => arr.reduce((acc, val) => acc + val, 0);

// use for...of
const sumArrayForOf = (arr) => {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
};

console.log(sumArray(array));
