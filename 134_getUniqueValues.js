const colors = ["red", "blue", "green", "red", "blue", "yellow"];

const getUniqueValues = (colors) => {
    return [...new Set(colors)];
};

console.log(getUniqueValues(colors));

// Alternative

const getUniqueValues2 = (colors) => {
    return colors.reduce((acc, color) => {
        if (!acc.includes(color)) {
            acc.push(color);
        }

        return acc;
    }, []);
};

console.log(getUniqueValues2(colors));
