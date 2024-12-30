const createPromise = (data, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

const getUser = () => createPromise({ id: 1, name: "Alice" }, 1000);
const getProducts = () => createPromise(["Product1", "Product2"], 2000);
const getOrders = () => createPromise(["Order1", "Order2"], 1500);

const fetchAllData = async () => {
  try {
    const [user, products, orders] = await Promise.all([
      getUser(),
      getProducts(),
      getOrders(),
    ]);
    return { user, products, orders };
  } catch (error) {
    console.error(error);
    return null;
  }
};

fetchAllData()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
