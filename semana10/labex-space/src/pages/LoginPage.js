import React from "react"
import {TiArrowBackOutline} from "react-icons/ti"
import { useHistory } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import styled from "styled-components"
import { goToAdminHomePage } from "../Routes/coordinator"

const LoginPage = () =>  {
    const history = useHistory();

  return (
    <div >
         <HeaderContainerListPage>
            <BackPage onClick={history.goBack} ><TiArrowBackOutline/></BackPage>
            <Header/>
          
        </HeaderContainerListPage>
     <MainLogin>
      <Login> 
       <div>Login</div>
       <input placeholder="Your email" value="" ></input>
       <input placeholder="Your password" value="" ></input>
       <button onClick={()=> goToAdminHomePage(history)} >Login</button>
       <p>Área restrita para funcionários</p>
      </Login >
     </MainLogin>
     <Footer/>
    </div>
  );
}

export default LoginPage;

const MainLogin = styled.div`
    display:flex;
    flex-direction:column;
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