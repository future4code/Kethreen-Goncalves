import React, { useState } from 'react'
import styled from "styled-components"
import PageHome from './components/Pages/Home'
import ClearSwipes from './components/Actions/ClearSwipes'
import GetMatches from "./components/Pages/GetMetchs"
import axios from "axios"
import logo from "./components/img/Captura de tela de 2021-04-09 01-20-37.png"
const  App = () => {
 const [page, setPage] = useState("home");
 const [matches, setMatches] = useState([]);

 const changePage = () => {
  if(page === "home"){
    setPage("matchs");
  }else if (page === "matchs"){
    setPage("home");
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
          <button onClick={changePage}>{matches.length}</button>
       </TitleApp>
       <PageHome/>
    </>

  )}else{
    return(
      <>
      <TitleApp>
          <button onClick={changePage}></button>
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
  width:100vw;
  height:100vh;
  background-color:#f0f3f7;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
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
   @media(max-width: 800px) {
    width:100vw;
    height:100vh;
   }
   @media(max-width: 1080px) {
    width:60vw;
    height:70vh;
   }
   
  `;

const TitleApp = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  gap:2vw;
  textarea:focus, button:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}
img{
  width:60%;
  height:100%;
  
}

  button:nth-child(1){
  background: url("https://www.flaticon.com/svg/vstatic/svg/3925/3925153.svg?token=exp=1617941653~hmac=5f1e0e350428fa87eab5ee15679e2f09");
  background-size: cover;
  background-repeat: no-repeat;
  width:14%;
  height:100%;
  border: none;
  
  }
  button:nth-child(3){
  background: url("https://www.flaticon.com/svg/vstatic/svg/3077/3077000.svg?token=exp=1617940461~hmac=60846e2c4dca85d17695a597fe36d293");
  background-size: cover;
  background-repeat: no-repeat;
  width:14%;
  height:100%;
  border: none;

}
  `;
 