const users = {
    Alice: {subscribers: 120, posts: 10},
    Bob: {subscribers: 350, posts: 5},
    Charlie: {subscribers: 300, posts: 8},
    David: {subscribers: 150, posts: 12},
};

const getMostFollowedUser = (users) => {
    return Object.entries(users).reduce(
        (acc, [name, data]) =>
            data.subscribers > acc.subscribers
                ? {name, subscribers: data.subscribers}
                : acc,
        {name: "", subscribers: 0},
    ).name;
};

console.log(getMostFollowedUser(users));
