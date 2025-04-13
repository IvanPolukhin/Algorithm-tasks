const products = [
    {name: "Laptop", category: "Electronics"},
    {name: "Shirt", category: "Clothing"},
    {name: "Phone", category: "Electronics"},
    {name: "Jeans", category: "Clothing"},
    {name: "Blender", category: "Home Appliances"},
];

const groupBy = (products, key) => {
    return products.reduce((acc, item) => {
        const groupKey = item[key];

        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }

        acc[groupKey].push(item);

        return acc;
    }, {});
};

const grouped = groupBy(products, "category");
console.log(grouped);
