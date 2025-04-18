const orders = [
    {id: 1, date: "2024-05-01", item: "Phone"},
    {id: 2, date: "2024-05-01", item: "Laptop"},
    {id: 3, date: "2024-05-02", item: "Tablet"},
    {id: 4, date: "2024-05-03", item: "Monitor"},
    {id: 5, date: "2024-05-02", item: "Keyboard"},
];

const groupOrdersByDate = (orders) => {
    return orders.reduce((acc, order) => {
        const {date, item} = order;

        if (!acc[date]) {
            acc[date] = [];
        }

        acc[date].push(item);

        return acc;
    }, {});
};

console.log(groupOrdersByDate(orders));
