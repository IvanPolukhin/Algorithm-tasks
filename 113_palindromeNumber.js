const isPalindrome = (number) => {
    if (number < 0) return false;

    const n = number.toString();

    return n === n.split("").reverse().join("");
};

console.log(isPalindrome(121));
