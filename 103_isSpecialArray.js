const isSpecialArrayV1 = (arr) => {
  return arr.slice(1).every((el, i) => arr[i] % 2 !== el % 2);
};

console.log(isSpecialArrayV1([1, 2, 3, 4]));
console.log(isSpecialArrayV1([2, 4, 6, 8]));
console.log(isSpecialArrayV1([1, 3, 5, 7]));
console.log(isSpecialArrayV1([7, 6, 3, 8, 1, 2]));

// second solution

const isSpecialArrayV2 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if ((arr[i] + arr[i + 1]) % 2 === 0) {
      return false;
    }
  }

  return true;
};

console.log(isSpecialArrayV2([1, 2, 3, 4]));
console.log(isSpecialArrayV2([2, 4, 6, 8]));
console.log(isSpecialArrayV2([1, 3, 5, 7]));
console.log(isSpecialArrayV2([7, 6, 3, 8, 1, 2]));
