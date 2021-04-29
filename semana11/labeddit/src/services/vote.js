import { BASE_URL } from "../constants/urls";
import axios from "axios";

export const voteRequest = (body, postId) => {
    axios
      .put(`${BASE_URL}/posts/${postId}/vote`,  body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
      .then((response) => {
          
        alert(
        
          "THEN Alert aqui só pra mostrar que o request está funcionando, porque não está atualizando automáticamente ainda"
        );
      })
      .catch((error) => {
        alert(
          "ERROR Alert aqui só pra mostrar que o request está funcionando, porque não está atualizando automáticamente ainda"
        );
      });
  };
  

export const voteCommentRequest = (body, postId, commentId) => {
  axios
    .put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`,  body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
    .then((response) => {
        console.log("entrou no voto",response)
      alert(
        "THEN Alert aqui só pra mostrar que o request está funcionando, porque não está atualizando automáticamente ainda"
      );
    })
    .catch((error) => {
        console.log(error.response)
      alert(
        "ERROR Alert aqui só pra mostrar que o request está funcionando, porque não está atualizando automáticamente ainda"
      );
    });
};
