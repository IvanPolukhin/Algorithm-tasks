const fetchData1 = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Данные от fetchData1"), 2000)
  );

const fetchData2 = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Данные от fetchData2"), 3000)
  );

const fetchData3 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject("Ошибка от fetchData3"), 1000)
  );

const getAllSettledResults = async () => {
  const result = await Promise.allSettled([
    fetchData1(),
    fetchData2(),
    fetchData3(),
  ]);

  const successData = result
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  return successData;
};

const getFirstResult = async () => {
  try {
    const result = await Promise.race([
      fetchData1(),
      fetchData2(),
      fetchData3(),
    ]);
    return result;
  } catch (error) {
    return error;
  }
};

getAllSettledResults().then((data) => console.log("Успешные данные:", data));
getFirstResult().then((result) => console.log("Первый результат:", result));
