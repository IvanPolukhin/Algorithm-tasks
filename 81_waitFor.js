const waitFor = (ms, value) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
};

waitFor(2000, "Hello, World!").then((result) => {
  console.log(result);
});
