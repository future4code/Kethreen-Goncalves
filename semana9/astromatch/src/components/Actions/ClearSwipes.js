import React from 'react'
import styled from "styled-components"
import axios from "axios"
import Profiles from './Profiles';


const  ClearSwipes = (props) => {

  const clearSwipes = () =>  {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/clear"
    )
    .then((response) => {
      props.getMatches();
    })
    .catch((err) => alert("atualiza a pagina"));
};
  
  <Profiles clearSwipes={clearSwipes}/>  
	return(
    <ClearButton onClick={clearSwipes}>Limpar swipes e matches</ClearButton>
    )
 
}

export default ClearSwipes;

const ClearButton = styled.button`

margin-top:2vh;
padding:3px;
border-radius:8px;
background-color:#313131;
color:white;
`;
