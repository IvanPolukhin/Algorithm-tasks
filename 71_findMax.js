const findMax = (arr) => {
  return arr.length === 0
    ? null
    : (() => {
        let max = arr[0];

        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
          }
        }

        return max;
      })();
};

console.log(findMax([8, 9, 10, 2, 5]));
