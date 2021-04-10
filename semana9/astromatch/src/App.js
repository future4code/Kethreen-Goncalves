import React, { useState } from 'react'
import styled from "styled-components"
import PageHome from './components/Pages/Home'
import ClearSwipes from './components/Actions/ClearSwipes'
import GetMatches from "./components/Pages/GetMetchs"
import axios from "axios"
import logo from "./components/img/Captura de tela de 2021-04-09 01-20-37.png"
import logoHeart from "./components/img/logocoracao.png"
import logoBack from "./components/img/voltar.png"


const  App = () => {
 const [page, setPage] = useState("home");
 const [matches, setMatches] = useState([]);


 const changePage = () => {
  if(page === "home"){
    getMatches();
    setPage("matchs");
  }else{
    setPage("home");
  }
 }
const RenderPage = () => {
if (page === "home"){
  return(
     <>
       <TitleApp>
          <div></div>
          <img src={logo} alt="logo"/>
          <button onClick={changePage} > <img src={logoHeart} alt="icone coração" /></button>
       </TitleApp>
       <PageHome/>
    </>

  )}else{
    return(
      <>
      <TitleApp>
          <button onClick={changePage}  > <img src={logoBack} alt="icone voltar"/></button>
          <img onClick={changePage}  src={logo} alt="logo"/>
          <div></div>
      </TitleApp>
      <GetMatches matches={matches} setMatches={setMatches} getMatches={getMatches}/>
    </>
    )
  }
}

const getMatches = () => {

  axios
    .get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/matches"
    )
    .then((response) => {
    
      setMatches(response.data.matches);
    })
    .catch((err) => alert("tente novamente mais tarde!"));
    
};
  return (

    <ContainerApp className="App">
      <MainContainer>
      <RenderPage/>
      <ClearSwipes getMatches={getMatches}/>
      </MainContainer>
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.div`
  width:100%;
  height:100vh;
  background-color:#f0f3f7;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:0;
  margin:0;
 
   `;

const MainContainer = styled.div`
  background-color:#ffffff;
   border-radius:20px;
   box-shadow: 0 0px 20px 0 rgba(79, 81, 84);
   background-repeat: no-repeat;
   background-size: cover;
   text-align:center;
   display:flex;
   flex-direction:column;
   align-items:center;
   width:20vw;
   height:66vh;
   @media(max-width: 1080px) {
    width:60vw;
    height:70vh;
   }
   @media(max-width: 800px) {
    width:100%;
    height:100%;
   }
  `;

const TitleApp = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-left:2%;
  margin-top:2%;
  cursor: pointer;

  textarea:focus, button:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}
img{
  width:60%;
  height:100%;
  
}

  button:nth-child(1){
    border:none;
    background:none;
    width:18%;
    height:70%;
    margin-left:1%;
    cursor: pointer;


  
  }
  button:nth-child(3){
    border:none;
    background:none;
    width:18%;
    height:70%;
    margin-left:16%;
    cursor: pointer;
 
}
  `;
 