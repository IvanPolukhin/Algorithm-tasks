const users = [
    {id: 1, name: "Alice", age: 28},
    {id: 2, name: "Bob", age: 34},
    {id: 3, name: "Charlie", age: 22},
];

const normalizeUsers = (users) => {
    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
};

console.log(normalizeUsers(users));
