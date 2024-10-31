function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        userId: url.split("/").pop(),
        name: `User ${url.split("/").pop()}`,
      };
      resolve(data);
    }, Math.random() * 2000);
  });
}

const urls = ["/users/1", "/users/2", "/users/3"];

const getUserData = async (urls) => {
  const arrayData = urls.map((url) => fetchData(url));
  const results = await Promise.all(arrayData);
  return results;
};
