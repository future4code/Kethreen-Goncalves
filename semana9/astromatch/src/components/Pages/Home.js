import React from 'react'
import styled from "styled-components"
import Profiles from '../Actions/Profiles';


const  PageHome = () => {
 


  return (
    <ContainerHome className="App">
       <Profiles/>
    </ContainerHome>
  );
}

export default PageHome;

const ContainerHome = styled.div`

  text-align:center;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  align-items:center;
  width:80%;
  height:82%;
  color:white;
  margin-top:1vh;
  background-color: #40b89a;
 
  `;

