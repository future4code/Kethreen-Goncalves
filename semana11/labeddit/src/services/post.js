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

      clear();
    })
    .catch((err) => {
      setIsLoading(false);

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
    .catch((err) => {
      alert("erro")
    })
};

