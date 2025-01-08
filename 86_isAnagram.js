const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const normalize = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");
  };

  return normalize(s) === normalize(t);
};

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
