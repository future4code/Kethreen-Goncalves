import React, { useEffect, useState } from "react"
import {useHistory} from "react-router-dom"
import {goToListTripsPage, goToLoginPage} from "../Routes/coordinator"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Login from "../img/login.png"
import styled from "styled-components"
import background from "../img/backgroundalabx.jpeg"


const HomePages = () =>  {
    const history = useHistory();
    const user = window.localStorage.getItem("user");
    const [printUser, setPrintUser] = useState("Área Administrativa")
    const token = window.localStorage.getItem("token");
   
    useEffect(() => {
        logUser()
        console.log("useefect")
      },[]);
    

    function logUser() {
        if (token) {
        let log = user ;
        let n = log.indexOf("@");
        let x = log.substring(n, -n);
        setPrintUser(`Olá, ${x}!`)
        }}

  return (
    <AppHome >
     <Header/>
     <MainContainerHome>
       <section ><img onClick={()=> goToLoginPage(history)}
       alt="login administrativo" 
       title="Área Administrativa" 
       src={Login}/> 
       <p>{printUser}</p>
       </section>
        <SpaceContainer>
        <button onClick={()=> goToListTripsPage(history)}> 
            VER VIAGENS
        </button>
        </SpaceContainer> 
    
     </MainContainerHome>
     <Footer/>
    </AppHome>
  );
}

export default HomePages;

const AppHome = styled.div`
width:90vw;
height:90vh;
background-image: linear-gradient(0deg, #1f0a36 ,#909DBD 120%);
margin:2%;
display:flex;
flex-direction:column;
align-self:center;
border-radius:30px;
box-shadow: 4px 10px 30px #261d1d;
`;

const MainContainerHome = styled.main`
display:flex;
flex-direction:column;
align-items:center;
height:75vh; 
color:columns: #f9f9f9;

    section{
        width:88vw;
        display:flex;
        flex-direction:column; 
        align-items:flex-end;
        margin-right:2%;
        cursor: pointer;
        img{
            width:5%;
            height:60%; 
            background-color:white;  
        }
        p{
            font-size:0.7rem;
            margin-right:0.5%;
            
        }  
    }

`;
const SpaceContainer = styled.div`
display:flex;
justify-content:center;
width:30%;
height:70%;
background:url(${background});
background-repeat: no-repeat;
background-size: cover;
border-radius:51px;
box-shadow: 4px 5px 15px #261d1d; 

button{
    width:282px;
    height:70px;
    background-color: rgba(250, 252, 252, 0.2);;
    color:#f9f9f9;
    border-radius:50px;
    align-self:center;
    font-size:1.5rem;
    cursor: pointer;
    border-top: 2px solid #eceff2;
    border-left: 2px solid #eceff2;
    :hover {
    background-color:rgba(250, 252, 252, 0.5);
    transform: scale(1.1);
    transition:all 0.6s ease;
  }

}
`;
