const products = [
    {name: "Laptop", category: "Electronics"},
    {name: "Shirt", category: "Clothing"},
    {name: "Phone", category: "Electronics"},
    {name: "Jeans", category: "Clothing"},
    {name: "Blender", category: "Home Appliances"},
];

const countByCategory = (products) => {
    const result = {};

    for (const product of products) {
        const {name, category} = product;

        if (result[category]) {
            result[category].push(name);
        } else {
            result[category] = [name];
        }
    }

    return result;
};

console.log(countByCategory(products));
