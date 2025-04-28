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

    for (const key in obj2) {
        if (key in res) {
            const val1 = res[key];
            const val2 = obj2[key];

            if (typeof val1 === "number" && typeof val2 === "number") {
                res[key] = val1 + val2;
            } else if (typeof val2 === "string" && typeof val1 === "string") {
                res[key] = val1 + "|" + val2;
            } else {
                res[key] = val2;
            }
        } else {
            res[key] = obj2[key];
        }
    }

    return res;
};

console.log(mergeObjects(obj1, obj2));
