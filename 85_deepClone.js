const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (let key of Object.keys(obj)) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
};

const original = {
  name: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
    zip: 12345,
  },
  hobbies: ["reading", "traveling"],
};

const copy = deepClone(original);

console.log(copy);
console.log(copy === original);
console.log(copy.address === original.address);
console.log(copy.hobbies === original.hobbies);
