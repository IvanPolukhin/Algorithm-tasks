const users = [
    {id: 1, name: "Alice", age: 25, purchases: [120, 35, 78]},
    {id: 2, name: "Bob", age: 19, purchases: [20]},
    {id: 3, name: "Charlie", age: 32, purchases: [45, 300, 20, 15]},
    {id: 4, name: "Diana", age: 28, purchases: []},
];

const UserStatistics = (users) => {
    const activeUsers = users.filter((user) => user.purchases.length > 0);
    const stats = activeUsers.map((user) => {
        const total = user.purchases.reduce((sum, val) => sum + val, 0);
        const average = total / user.purchases.length;
        return {
            name: user.name,
            totalSpent: total,
            averagePurchase: Number(average.toFixed(2)),
        };
    });

    stats.sort((a, b) => b.totalSpent - a.totalSpent);

    return stats;
};

console.log(UserStatistics(users));
// [
//     { name: 'Charlie', totalSpent: 380, averagePurchase: 95 },
//     { name: 'Alice', totalSpent: 233, averagePurchase: 77.67 },
//     { name: 'Bob', totalSpent: 20, averagePurchase: 20 }
// ]
//
