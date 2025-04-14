const getMostPopularItem = (orders) => {
    const itemCounts = orders.reduce((acc, order) => {
        const item = order.item;
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    let maxCount = 0;
    let mostPopularItem = null;

    for (const [item, count] of Object.entries(itemCounts)) {
        if (count > maxCount) {
            maxCount = count;
            mostPopularItem = item;
        }
    }

    return mostPopularItem;
};

const orders = [
    {id: 1, customer: "Alice", item: "Phone"},
    {id: 2, customer: "Bob", item: "Laptop"},
    {id: 3, customer: "Alice", item: "Tablet"},
    {id: 4, customer: "Alice", item: "Phone"},
    {id: 5, customer: "Bob", item: "Phone"},
    {id: 6, customer: "Charlie", item: "Monitor"},
    {id: 7, customer: "David", item: "Phone"},
];

console.log(getMostPopularItem(orders));
