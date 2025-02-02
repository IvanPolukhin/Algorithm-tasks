const asyncCounter = (start, end, delay) => {
  let counter = start;

  const intervalId = setInterval(() => {
    console.log(counter);

    counter === end ? clearInterval(intervalId) : counter++;
  }, delay);
};

asyncCounter(1, 10, 1000);
