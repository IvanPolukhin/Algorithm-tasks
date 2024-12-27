const countLetters = (str) => {
  let result = {};
  for (char of str.toLowerCase()) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

// Alternative solution

const countLetters2 = (str) => {
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      acc[char] = acc[char] ? acc[char] + 1 : 1;
      return acc;
    }, {});
};

console.log(countLetters("javaScript"));
console.log(countLetters2("javaScript"));
