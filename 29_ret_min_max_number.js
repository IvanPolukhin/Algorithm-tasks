let array = [1, 1, 5, 6, 8, 2, 3, 10];

function retLowHigh(arr) {
  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);
  return [minNum, maxNum];
}
console.log(retLowHigh(array));
