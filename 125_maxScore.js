const maxScore = (str) => {
    let maxScore = 0;
    let ones = str.split("1").length - 1;
    let zeros = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            zeros++;
        } else {
            ones--;
        }

        maxScore = Math.max(maxScore, zeros + ones);
    }

    return maxScore;
};

console.log(maxScore("011101"));
console.log(maxScore("00111"));
console.log(maxScore("1111"));
