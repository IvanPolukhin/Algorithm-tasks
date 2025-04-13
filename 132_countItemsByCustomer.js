const orders = [
    {id: 1, customer: "Alice", item: "Phone"},
    {id: 2, customer: "Bob", item: "Laptop"},
    {id: 3, customer: "Alice", item: "Tablet"},
    {id: 4, customer: "Alice", item: "Phone"},
    {id: 5, customer: "Bob", item: "Phone"},
    {id: 6, customer: "Charlie", item: "Monitor"},
];

const countItemsByCustomer = (orders) => {
    return orders.reduce((acc, item) => {
        if (!acc[item.customer]) {
            acc[item.customer] = new Set();
        }

        acc[item.customer].add(item.item);

        return acc;
    }, {});
};

console.log(countItemsByCustomer(orders));

const itemCounts = Object.fromEntries(
    Object.entries(countItemsByCustomer(orders)).map(([customer, items]) => [
        customer,
        items.size,
    ]),
);

console.log(itemCounts);
