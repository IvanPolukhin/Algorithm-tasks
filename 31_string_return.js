let user = {
  name: "ivan",
  age: 20,
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function returnStrint(value) {
  if (value === undefined) {
    return "undefined";
  }

  if (value === null) {
    return "null";
  }
  if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "object"
  ) {
    return JSON.stringify(value);
  } else {
    return value.toString();
  }
}

console.log(returnStrint(arr));
console.log(returnStrint(user));
console.log(returnStrint(false));
console.log(returnStrint(12));
console.log(returnStrint(null));
console.log(returnStrint("hi"));
