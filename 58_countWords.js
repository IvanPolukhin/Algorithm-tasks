const countWords = (str) => {
  const text = str.toLowerCase().replace(/[^\w\s]/g, "");
  const words = text.split(" ");

  const countWords = {};
  for (const word of words) {
    if (word) {
      countWords[word] = (countWords[word] || 0) + 1;
    }
  }

  return countWords;
};

console.log(countWords("Hello, my dear friend, hello everyone"));
