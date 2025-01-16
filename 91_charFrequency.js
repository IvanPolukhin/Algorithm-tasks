const charFrequency = (str) => {
  return str
    .split("")
    .filter((char) => char !== " ")
    .reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
};

console.log(charFrequency("hello world"));
