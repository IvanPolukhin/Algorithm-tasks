const user = {
    name: "Ivan",
    age: 23,
    address: {
        city: "Kyiv",
        street: "Shevchenka St",
    },
};

const shallowCopy = {...user};

const deepCopy = JSON.parse(JSON.stringify(user));
const deepCopy2 = structuredClone(user);

console.log("Оригинал:", user.name);
console.log("Копия:", shallowCopy.name);
console.log("Оригинал:", user.address.city);
console.log("Глубокая копия:", deepCopy.address.city);
console.log("Глубокая копия:", deepCopy2.address.city);
