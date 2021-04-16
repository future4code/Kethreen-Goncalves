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

const LoginPage = () =>  {
    const history = useHistory();
    useProtectedLog();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const login = () =>{
        const body = {
            email:email,
            password: password
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
          <Login> 
            <div>Login</div>
            <input 
              placeholder="Email" 
              value={email} 
              onChange={handleEmail}>
            </input>
            <input 
              placeholder="Password"
              value={password} 
              onChange={handlePassword}>
            </input>
            <button onClick={login} >Login</button>
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
const Login = styled.div`
  display:flex;
  flex-direction:column;
  width:300px;
  height:300px;
  align-items:center;
  align-self:center;
  background-color:#e9f2eb;
  gap:5%;
`;


