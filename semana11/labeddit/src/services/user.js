import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { goToFeedPage } from "../routes/coordinator";

export const login = (body, clear, history) => {
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userName", res.data.user.username);
        console.log(res)
        clear()
        goToFeedPage(history)
      })
      .catch((err) => alert("Erro no Login"));
  };


  export const signUp = (body, clear, history) => {
    axios
      .post(`${BASE_URL}/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userName", res.data.user.username);
        console.log(res)
        clear()
        goToFeedPage(history)
      })
      .catch((err) => alert("Erro no Cadastro"));
  };


  