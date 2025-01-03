const fetchWithTimeout = async (promises, timeout) => {
  try {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Превышено время ожидания")), timeout)
    );

    const results = await Promise.race([Promise.all(promises), timeoutPromise]);

    return results;
  } catch (error) {
    console.error("Ошибка:", error);
    throw error;
  }
};

const fetchData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Данные 1"), 3000));
const fetchData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Данные 2"), 2000));
const fetchData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Данные 3"), 5000));

fetchWithTimeout([fetchData1(), fetchData2(), fetchData3()], 6000)
  .then((result) => console.log("Результаты:", result))
  .catch((error) => console.error("Ошибка:", error));
