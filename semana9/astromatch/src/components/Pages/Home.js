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
  border: 1px solid black;
  text-align:center;
  width:40%;
  height:80%;
  display:flex;
  flex-direction:column;
  align-items:center;
 
  `;

