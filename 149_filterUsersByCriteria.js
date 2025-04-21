const orders = [
    {id: 1, status: "delivered", amount: 150},
    {id: 2, status: "pending", amount: 200},
    {id: 3, status: "delivered", amount: 90},
    {id: 4, status: "delivered", amount: 120},
];

const filterUsersByCriteria = (orders) => {
    return orders.filter(
        ({status, amount}) => status === "delivered" && amount > 100,
    );
};

console.log(filterUsersByCriteria(orders));
