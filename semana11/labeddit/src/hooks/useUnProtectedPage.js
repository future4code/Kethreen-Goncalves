import { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { goToFeedPage, goToLogin } from "../routes/coordinator";

const useUnProtectedPage = () => {
  const history = useHistory();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToFeedPage(history);
    }else{
      goToLogin(history)
    }
  }, [history]);
};

export default useUnProtectedPage;