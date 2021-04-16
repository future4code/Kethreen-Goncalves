import React, { useEffect, useState } from "react"
import {useHistory} from "react-router-dom"
import {goToListTripsPage, goToLoginPage} from "../Routes/coordinator"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Login from "../img/login.png"
import styled from "styled-components"



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
    <div >
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
    </div>
  );
}

export default HomePages;

const MainContainerHome = styled.main`
display:flex;
flex-direction:column;
height:75vh; 
    section{
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
width:378px;
height:365px;
background-image: url("../img/backgroundalabx.jpeg");

button{
    width:300px;
    height:100px;
    align-self:center;
    font-size:1.5rem;
    cursor: pointer;
}
`;
