const delayedCounter = (num, time, long) => {
  for (let i = 0; i < long; i++) {
    setTimeout(() => {
      console.log(num + i);
    }, i * time);
  }
};

delayedCounter(1, 1000, 3);
