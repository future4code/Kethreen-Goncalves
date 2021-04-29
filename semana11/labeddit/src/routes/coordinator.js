export const goToLogin = (history) => {
  history.push("/");
};

export const goToSignUp = (history) => {
  history.push("/posts");
};

export const goToFeedPage = (history) => {
  history.push("/feed");
};

export const goToAddPost = (history) => {
  history.push("/add-post");
};

export const goToDetailsPost = (history, id) => {
  history.push(`/posts/${id}`);
};


