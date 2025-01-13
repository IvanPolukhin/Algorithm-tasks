const filterNumbers = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return "Please provide a valid array";
  }

  return array.filter((el) => typeof el === "number" && el >= 10);
};

console.log(filterNumbers(["a", "b", "c", "de", "f", "gh", 1, "klm"]));
console.log(filterNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));
console.log(filterNumbers([]));
console.log(filterNumbers("not an array"));
