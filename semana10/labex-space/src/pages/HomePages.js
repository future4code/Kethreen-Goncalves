import React from "react"
import {useHistory} from "react-router-dom"
import {goToListTripsPage, goToLoginPage} from "../Routes/coordinator"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Login from "../img/login.png"
import styled from "styled-components"

const HomePages = () =>  {
    const history = useHistory();
    
  return (
    <div >
     <Header/>
     <MainContainerHome>
       <section onClick={()=> goToLoginPage(history)}><img alt="login administrativo" title="Área Administrativa" src={Login}/> <p>Área Administrativa</p></section> 
        <button onClick={()=> goToListTripsPage(history)}> 
            VER VIAGENS
        </button>
    
    
     </MainContainerHome>
     <Footer/>
    </div>
  );
}

export default HomePages;

const MainContainerHome = styled.main`
display:flex;
flex-direction:column; 
    section{
        display:flex;
        flex-direction:column; 
        align-items:flex-end;
        margin-right:2%;
        cursor: pointer;
        img{
            width:5%;
            height:10%;   
        }
        p{
            font-size:0.7rem;
            margin-right:0.5%;
            
        }  
    }
    button{
        width:300px;
        height:100px;
        align-self:center;
        font-size:1.5rem;
        cursor: pointer;
    }
`;