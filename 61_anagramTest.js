const anagramTest = (str, str1) => {
  const normalize = (s) =>
    s.replace(/\s/g, "").toLowerCase().split("").sort().join("");

  return normalize(str) === normalize(str1);
};

console.log(anagramTest("listen", "silent"));
console.log(anagramTest("hello", "world"));
