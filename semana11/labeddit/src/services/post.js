import { BASE_URL } from "../constants/urls";
import axios from "axios";

export const createPost = (body, clear, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setIsLoading(false);
      console.log(res);
      clear();
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(err.response.message);
    });
};

export const createCommentRequest = (body, clear, id) => {
  axios
    .post(`${BASE_URL}/posts/${id}/comment`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      clear();
    })
    .catch((err) => console.log(err));
};

// export const voteCommentRequest = (body, postId, commentId) => {
//   axios
//     .put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, headers)
//     .then((response) => {
//       alert(
//         "THEN Alert aqui só pra mostrar que o request está funcionando, porque não está atualizando automáticamente ainda"
//       );
//     })
//     .catch((error) => {
//       alert(
//         "ERROR Alert aqui só pra mostrar que o request está funcionando, porque não está atualizando automáticamente ainda"
//       );
//     });
// };
