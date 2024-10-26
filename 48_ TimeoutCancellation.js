function greet(name) {
  console.log(`hi, ${name}`);
}

const cancellable = (fn, args, t) => {
  const timeout = setTimeout(() => fn(...args), t);
  return () => clearTimeout(timeout);
};

const cancelGreet = cancellable(greet, ["Ivan"], 5000);

setTimeout(() => {
  cancelGreet();
  console.log("cancel fn");
}, 1000);
