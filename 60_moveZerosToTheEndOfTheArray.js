const moveZeroes = (array) => {
  let nonZero = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[nonZero] = array[i];
      nonZero++;
    }
  }

  for (let i = nonZero; i < array.length; i++) {
    array[i] = 0;
  }

  return array;
};

console.log(moveZeroes([1, 23, 0, 0, 0, 0, 4, 33, 57, 8]));

const moveZeros2 = (arr) => {
  const zeroArr = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArr.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return [...result, ...zeroArr];
};

console.log(moveZeros2([1, 23, 0, 0, 0, 0, 4, 33, 57, 8]));
