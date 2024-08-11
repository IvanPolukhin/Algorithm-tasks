function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

console.log(disemvowel("this"));
