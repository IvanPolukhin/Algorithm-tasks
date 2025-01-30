const accumulator = (num) => {
  let count = 0;
  return () => {
    count = count + num;
    return count;
  };
};

const counter = accumulator(5);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
