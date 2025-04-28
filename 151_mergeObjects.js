const obj1 = {
    apples: 10,
    bananas: 5,
    title: "Fresh",
    meta: {created: "today"},
};

const obj2 = {
    bananas: 7,
    oranges: 3,
    title: "Fruits",
    meta: {updated: "tomorrow"},
};

const mergeObjects = (obj1, obj2) => {
    const res = {...obj1};

    const mergeValues = (val1, val2) => {
        if (typeof val1 === "number" && typeof val2 === "number")
            return val1 + val2;
        if (typeof val1 === "string" && typeof val2 === "string")
            return `${val1}|${val2}`;
        return val2;
    };

    for (const key in obj2) {
        const val1 = res[key];
        const val2 = obj2[key];

        res[key] = key in res ? mergeValues(val1, val2) : val2;
    }

    return res;
};

console.log(mergeObjects(obj1, obj2));
