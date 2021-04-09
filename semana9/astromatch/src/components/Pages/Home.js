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
  box-shadow: 0 0px 20px 0 rgba(69, 71, 94);
  text-align:center;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  align-items:center;
  width:80%;
  height:82%;
  color:white;
  background-color: #313131;
 
  `;

