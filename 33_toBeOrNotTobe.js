function expect(val) {
  return {
    toBe: function (expected) {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (expected) {
      if (val !== expected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

console.log(expect(5).toBe(5));
console.log(expect(2).toBe(5));
