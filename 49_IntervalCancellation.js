function greet(name) {
  console.log(`hi, ${name}`);
}

const cancellable = (fn, args, t) => {
  fn(...args);
  const intervalFn = setInterval(() => fn(...args), t);
  return () => clearInterval(intervalFn);
};

const cancelGreet = cancellable(greet, ["Ivan"], 3000);

setTimeout(() => {
  cancelGreet();
  console.log("Interval cancelled");
}, 5000);
