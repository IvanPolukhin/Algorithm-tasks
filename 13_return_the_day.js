let arr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDay(arr, index) {
  if (index >= 1 && index < 7) {
    return arr[index - 1];
  } else {
    return "Wrong, please enter a number between 1 and 7";
  }
}

console.log(getDay(arr, 1));
console.log(getDay(arr, 7));
