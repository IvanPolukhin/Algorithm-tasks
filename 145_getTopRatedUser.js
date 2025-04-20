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

// Alternative

const getTopRatedUserAlternative = (ratings) => {
    let user = "";
    let maxAvg = 0;

    for (const [name, scores] of Object.entries(ratings)) {
        const avg =
            scores.reduce((total, score) => total + score, 0) / scores.length;

        avg > maxAvg ? ((maxAvg = avg), (user = name)) : null;
    }

    return user;
};

console.log(getTopRatedUserAlternative(ratings));
