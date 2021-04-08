import React, { useState } from 'react'
import styled from "styled-components"
import PageHome from './components/Pages/Home'
import ClearSwipes from './components/Actions/ClearSwipes'
import PageMatchs from './components/Pages/YourMatches'

const  App = () => {
 const [page, setPage] = useState("home");

 const changePage = () => {
  if (page === "home"){
    setPage("matchs");
  }else{
    setPage("home");
  }
 }
const RenderPage = () => {
if (page === "home"){
  return(
    <PageHome/>
  )}else{
    return(
    <PageMatchs/>
    )
  }
}
 
  return (
    <ContainerApp className="App">
       <TitleApp>
       <button onClick={changePage}>voltar</button>
       <h1>AstroMatch</h1>
       <button onClick={changePage}>matches</button>
       </TitleApp>
       <RenderPage/>
      <ClearSwipes/>
     
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.div`
  border: 1px solid black;
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
 
  `;
const TitleApp = styled.div`
  display:flex;
  flex-direction:row;
  gap:5vw;
  `;
 