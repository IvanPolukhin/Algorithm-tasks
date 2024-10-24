const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

const addTwoPromises = async (promise1, promise2) => {
  const result1 = await promise1;
  const result2 = await promise2;
  return result1 + result2;
};

addTwoPromises(promise1, promise2).then((sum) => {
  console.log(sum);
});
