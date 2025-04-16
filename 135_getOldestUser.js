const users = {
    Alice: 25,
    Bob: 30,
    Charlie: 22,
    David: 28,
};

const getOldestUser = (users) => {
    let maxAge = -Infinity;
    let oldestUser = "";

    for (const name in users) {
        if (users[name] > maxAge) {
            maxAge = users[name];
            oldestUser = name;
        }
    }

    return oldestUser;
};

console.log(getOldestUser(users));
