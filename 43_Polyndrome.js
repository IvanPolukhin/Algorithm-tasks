const polyndrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(polyndrome("level"));
console.log(polyndrome("world"));
