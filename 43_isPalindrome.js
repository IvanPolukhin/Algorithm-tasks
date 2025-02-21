const isPalindrome = (str) => {
    return str === str.split("").reverse().join("");
};

console.log(isPalindrome("level"));
console.log(isPalindrome("world"));
