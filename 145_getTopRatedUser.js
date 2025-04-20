const ratings = {
    Alice: [5, 4, 4],
    Bob: [3, 4, 5, 5],
    Charlie: [4, 4],
    Diana: [5, 5, 5, 4, 5],
};

const getTopRatedUser = (ratings) => {
    return Object.entries(ratings).reduce(
        (acc, [name, scores]) => {
            const avg =
                scores.reduce((total, score) => total + score, 0) / scores.length;

            return avg > acc.maxAvg ? {name: name, maxAvg: avg} : acc;
        },
        {name: "", maxAvg: 0},
    ).name;
};

console.log(getTopRatedUser(ratings));
