const firstUniqueChar = (str) => {
  const charCount = {};

  for (const char of str) {
    if (char) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return "none";
};

console.log(firstUniqueChar("swiss"));
console.log(firstUniqueChar("level"));
console.log(firstUniqueChar("aabbcc"));
console.log(firstUniqueChar("javascript"));
