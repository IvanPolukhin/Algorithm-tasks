const fetchData1 = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (Math.random() > 0.5 ? resolve("Данные 1") : reject("Ошибка 1")),
      1000
    )
  );

const fetchData2 = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (Math.random() > 0.5 ? resolve("Данные 2") : reject("Ошибка 2")),
      2000
    )
  );

const fetchData3 = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (Math.random() > 0.5 ? resolve("Данные 3") : reject("Ошибка 3")),
      1500
    )
  );

const fetchAllData = async () => {
  try {
    const result = await Promise.allSettled([
      fetchData1(),
      fetchData2(),
      fetchData3(),
    ]);

    const successData = result
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);
    const errorData = result
      .filter((result) => result.status === "rejected")
      .map((result) => result.reason);

    console.log("fulfilled: ", successData);
    console.log("rejected: ", errorData);
  } catch (error) {
    console.error(error);
  }
};

fetchAllData();
