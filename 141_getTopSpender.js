const customers = {
    Alice: {purchases: [120, 35, 78]},
    Bob: {purchases: [220, 15]},
    Charlie: {purchases: [30, 45, 60, 25]},
};

const getTopSpender = (order) => {
    let maxSum = -Infinity;
    let topSpenders = "";

    for (const [name, date] in Object.entries(order)) {
        const total = date.purchases.reduce((sum, price) => sum + price, 0);

        if (total > maxSum) {
            maxSum = total;
            topSpenders = name;
        }
    }

    return topSpenders;
};

console.log(getTopSpender(customers));
