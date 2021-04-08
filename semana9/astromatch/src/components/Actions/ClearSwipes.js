import React from 'react'
import styled from "styled-components"
import axios from "axios"


const  ClearSwipes = () => {

  const clearSwipes = () =>  {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/clear"
    )
    .then((response) => {
      
    })
    .catch((err) => alert("atualiza a pagina"));
};



    

  
	return(
    <ClearButton onClick={clearSwipes}>Limpar swipes e matches</ClearButton>
    )
 
}

export default ClearSwipes;

const ClearButton = styled.button`

bottom: 5px;
right: 5px;
`;
