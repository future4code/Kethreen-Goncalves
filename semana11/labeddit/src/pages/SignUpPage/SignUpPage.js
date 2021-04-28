import React, { useState } from "react";
import {
  InputsContainer,
  LogoImage,
  ScreenContainer,
  SectionLogoText,
  SectionFormLogin,
} from "./styled";
import logo from "../../assets/img/logo-labeddit.png";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";

import { useHistory } from "react-router";
import useUnProtectedPage from "../../hooks/useUnProtectedPage";
import { signUp } from "../../services/user";
import Header from "../../components/Header/Header";

const SignUpPage = () => {
  useUnProtectedPage();
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    email: "",
    password: "",
    username: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, history, setIsLoading);
  };

  return (
    <>
      <Header />
      <ScreenContainer>
        <SectionLogoText>
          <LogoImage src={logo} alt='logo labEddit' />
          <h3>
            O LabEddit ajuda você a se conectar e compartilhar com pessoas que
            fazem parte da sua rotina de estudos na Labenu.
          </h3>
        </SectionLogoText>
        <SectionFormLogin>
          <InputsContainer>
            <form onSubmit={onSubmitForm}>
              <TextField
                name={"username"}
                value={form.username}
                onChange={onChange}
                label={"Nome"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                autoFocus
              />
              <TextField
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"E-mail"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"email"}
              />
              <TextField
                name={"password"}
                value={form.password}
                onChange={onChange}
                label={"Senha"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"password"}
              />
              <Button
                // onClick={() => goToFeedPage(history)}
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"secondary"}
              >
                {isLoading ? (
                  <CircularProgress color={"inherit"} size={24} />
                ) : (
                  <>Fazer Cadastro !</>
                )}
              </Button>
            </form>
          </InputsContainer>
        </SectionFormLogin>
      </ScreenContainer>
    </>
  );
};

export default SignUpPage;
