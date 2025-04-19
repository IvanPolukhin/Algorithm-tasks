const studentScores = {
    Alice: [70, 85, 90],
    Bob: [88, 79],
    Charlie: [95, 100, 100],
};

const getTotalScore = (studentScores) => {
    const result = {};

    for (const [name, scores] of Object.entries(studentScores)) {
        result[name] = scores.reduce((acc, curr) => acc + curr, 0);
    }

    return result;
};

console.log(getTotalScore(studentScores));
