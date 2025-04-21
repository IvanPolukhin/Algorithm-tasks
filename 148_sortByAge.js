const users = [
    {name: "Alice", age: 30},
    {name: "Bob", age: 22},
    {name: "Charlie", age: 25},
];

const sortByAge = (users) => {
    return users.sort((a, b) => a.age - b.age);
};

console.log(sortByAge(users));
