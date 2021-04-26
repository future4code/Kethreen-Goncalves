export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.push("/cadastro");
};

export const goToFeedPage = (history) => {
    history.push("/feed");
  };

export const goToAddPost = (history) => {
  history.push("/adicionar-postagem");
};

export const goToDetailsPost = (history, id) => {
  history.push(`/Detalhes/${id}`);
};

export const goToHome = (history) => {
  history.push("/");
};
