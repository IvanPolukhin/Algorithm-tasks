const fetchUser = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "John Doe" }), 2000)
  );

const fetchPosts = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000)
  );

const fetchComments = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["Comment 1", "Comment 2"]), 3000)
  );

const getFastestResponse = async () => {
  try {
    const fastest = await Promise.race([
      fetchSlow(),
      fetchMedium(),
      fetchFast(),
    ]);
    console.log("Самый быстрый ответ:", fastest);
  } catch (error) {
    console.error("Ошибка в Promise.race:", error);
  }
};

const getAnySuccessfulResponse = async () => {
  try {
    const successful = await Promise.any([
      fetchSlow(),
      fetchMedium(),
      fetchFast(),
    ]);
    console.log("Первый успешный ответ:", successful);
  } catch (error) {
    console.error("Ошибка в Promise.any:", error);
  }
};

getFastestResponse()
  .then(() => console.log("Завершение getFastestResponse"))
  .catch((error) => console.error(error));
getAnySuccessfulResponse()
  .then(() => console.log("Завершение getAnySuccessfulResponse"))
  .catch((error) => console.error(error));
