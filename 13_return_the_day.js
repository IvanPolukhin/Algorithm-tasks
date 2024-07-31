let arr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getWeek(arr, index) {
  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    return "Wrong, please enter a number between 0 and 6";
  }
}

console.log(getWeek(arr, 2));
console.log(getWeek(arr, 7));
