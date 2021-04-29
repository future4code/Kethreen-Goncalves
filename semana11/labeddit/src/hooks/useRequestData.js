import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { goToLogin } from "../routes/coordinator";

export const useRequestData = (initialData, url) => {
  const history = useHistory();
  const [data, setData] = useState(initialData);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.posts);
      })
      .catch((err) => {
        goToLogin(history) 
        alert("É precisso logar para acessar a plataforma");
      });
     
  }, [url]);

  return data;
};

export const useRequestDataId = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.post);
      })
      .catch((err) => {

        alert("Ocorreu um erro, tente novamente");
      });
  }, [url]);

  return data;
};
