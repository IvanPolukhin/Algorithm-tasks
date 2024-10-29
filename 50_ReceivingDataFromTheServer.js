const fetchUser = new Promise((resolve) =>
  setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000)
);
const fetchPosts = new Promise((resolve) =>
  setTimeout(() => resolve(["Post 1", "Post 2"]), 2000)
);
const fetchComments = new Promise((resolve) =>
  setTimeout(() => resolve(["Comment 1", "Comment 2"]), 1500)
);

const dataFetcher = ({ fetchUser, fetchPosts, fetchComments }) => {
  return Promise.all([fetchUser, fetchPosts, fetchComments]).then(
    ([user, posts, comments]) => {
      return { user, posts, comments };
    }
  );
};

dataFetcher({ fetchUser, fetchPosts, fetchComments }).then((data) => {
  console.log("Fetched data:", data);
});
