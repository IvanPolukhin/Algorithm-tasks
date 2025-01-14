const findMaxDepth = (str) => {
  let maxDepth = 0;
  let currentDepth = 0;

  for (let char of str) {
    if (char === "(") {
      currentDepth++;
      maxDepth = Math.max(currentDepth, maxDepth);
    } else if (char === ")") {
      --currentDepth;
      if (currentDepth < 0) {
        return -1;
      }
    }
  }

  return currentDepth === 0 ? maxDepth : -1;
};

console.log(findMaxDepth("(1+(2*3)+((8)/4))+1"));
console.log(findMaxDepth("(1)+((2))+(((3)))"));
console.log(findMaxDepth("1+(2*3)/(2-1)"));
console.log(findMaxDepth("1)2"));
console.log(findMaxDepth("(()))"));
