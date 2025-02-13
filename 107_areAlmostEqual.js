const areAlmostEqual = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  let diff = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) diff.push(i);
    if (diff.length > 2) return false;
  }

  const [a, b] = diff;

  return (
    diff.length === 0 ||
    (diff.length === 2 && s1[a] === s2[b] && s1[b] === s2[a])
  );
};

console.log(areAlmostEqual("abcd", "dcba"));
console.log(areAlmostEqual("bank", "kanb"));
console.log(areAlmostEqual("test", "tset"));
console.log(areAlmostEqual("abc", "acb"));
