import { BASE_URL } from "../constants/urls";
import axios from "axios";


export const createPost = (body, clear) => {
    axios
      .post(`${BASE_URL}/posts`, body, {
          headers:{
              Authorization: localStorage.getItem("token")
          }
      })
      .then((res) => {
       
        console.log(res)
        clear()
       
      })
      .catch((err) => console.log(err.response.message));
  };

  export const createComment = (body, clear, PostId) => {
    axios
      .post(`${BASE_URL}/posts/${PostId}/comment`, body, {
          headers:{
              Authorization: localStorage.getItem("token")
          }
      })
      .then((res) => {
       
        console.log(res)
        clear()
       
      })
      .catch((err) => console.log(err.response.message));
  };

