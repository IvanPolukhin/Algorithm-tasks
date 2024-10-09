const compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

const compose1 = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};
