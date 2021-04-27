import React from "react";
import {
  InputsContainer,
  LogoImage,
  ScreenContainer,
  SectionLogoText,
  SectionFormLogin,
  SignUpButtonContainer,
} from "./styled";
import logo from "../../assets/img/logo-labeddit.png";
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { goToSignUp } from "../../routes/coordinator";
import { useHistory } from "react-router";
import { login } from "../../services/user";
import useUnProtectedPage from "../../hooks/useUnProtectedPage";
import Header from "../../components/Header/Header";

const LoginPage = () => {
  useUnProtectedPage();
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history);
  };
  

  return (
    <>
      <Header />
      <ScreenContainer>
        <SectionLogoText>
          <LogoImage src={logo} />
          <h3>
            O LabEddit ajuda você a se conectar e compartilhar com pessoas que
            fazem parte da sua rotina de estudos na Labenu.
          </h3>
        </SectionLogoText>
        <SectionFormLogin>
          <InputsContainer>
            <form onSubmit={onSubmitForm}>
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
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"secondary"}
              >
                Fazer Login !
              </Button>
            </form>
          </InputsContainer>
          <SignUpButtonContainer>
            <Button
              onClick={() => goToSignUp(history)}
              type={"submit"}
              fullWidth
              variant={"outlined"}
              color={"secondary"}
            >
              Não Possui conta? Cadastre-se
            </Button>
          </SignUpButtonContainer>
        </SectionFormLogin>
      </ScreenContainer>
    </>
  );
};

export default LoginPage;
