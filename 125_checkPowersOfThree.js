const checkPowersOfThree = (n) => {
    while (n > 0) {
        if (n % 3 === 2) return false; // a % b = a − ( b × (a / b))

        n = Math.floor(n / 3);
    }

    return true;
};

console.log(checkPowersOfThree(91));
