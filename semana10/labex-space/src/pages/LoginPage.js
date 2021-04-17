import React, { useState } from "react"
import axios from "axios"
import {TiArrowBackOutline} from "react-icons/ti"
import { useHistory } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import styled from "styled-components"
import { goToAdminHomePage, goToHomePage } from "../Routes/coordinator"
import {useProtectedLog} from "../hooks/useProtectedPage"
import { urlLogin } from "../Components/url-api";
import { useForm } from "../hooks/useForm";

const initialForm = {
  email:"",
  password:"",
 
};
const LoginPage = () =>  {
    const history = useHistory();
    useProtectedLog();
    const [form, onChange, resetForm] = useForm(initialForm);

    const login = (event) =>{
      event.preventDefault();
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post(urlLogin, body)
        .then((res) => {
            window.localStorage.setItem('token', res.data.token)
            window.localStorage.setItem('user', res.data.user.email)
            goToAdminHomePage(history);
        })
        .catch((err)=> {
            console.log(err.message);
        })
    }
 
  return (
    <div>
        <HeaderContainerListPage>
          <BackPage onClick={()=> goToHomePage(history)}  ><TiArrowBackOutline/></BackPage>
          <Header/>
        </HeaderContainerListPage>
        <MainLogin>
          <Login onSubmit={login}> 
            <div>Login</div>
            <input 
              required
              name='email'
              placeholder="Email" 
              value={form.email} 
              onChange={onChange}
              pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
              title={"Invalid e-mail"}>
            </input>
            <input 
              required
              name='password'
              placeholder="Password"
              value={form.password} 
              onChange={onChange}
              type="password">
            </input>
            <button type="submit" >Login</button>
            <p>Área restrita para funcionários</p>
          </Login >
        </MainLogin>
        <Footer/>
    </div>
  );
}

export default LoginPage;

// CSS STYLED COMPONENTS =>

const HeaderContainerListPage = styled.div`
  display:grid;
  grid-template-columns: 1fr 7fr 2fr;
  width:100vw;
    button{
        margin:10%;
        width:60%;
        height:30%;
    }
`;
const BackPage = styled.div`
  display:flex;
  flex-direction:column;
  font-size:70px;
  margin:10%;
`;
const MainLogin = styled.div`
    display:flex;
    flex-direction:column;
    height:75vh;
`;
const Login = styled.form`
  display:flex;
  flex-direction:column;
  width:300px;
  height:300px;
  align-items:center;
  align-self:center;
  background-color:#e9f2eb;
  gap:5%;
`;


