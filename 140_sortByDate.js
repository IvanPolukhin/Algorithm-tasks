const orders = [
  { id: 1, date: "2024-05-01", item: "Phone" },
  { id: 2, date: "2024-05-01", item: "Laptop" },
  { id: 3, date: "2024-05-02", item: "Tablet" },
  { id: 4, date: "2024-05-03", item: "Monitor" },
  { id: 5, date: "2024-05-02", item: "Keyboard" },
];

const sortByDate = (orders) => {
  return orders.sort((a, b) => new Date(b.date) - new Date(a.date));
};

console.log(sortByDate(orders));
