import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"

const  GetMatches = () => {
 const [matches, setMatches] = useState([]);


 useEffect(() => {
       getMatches(); 
   }, []);


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

 
  
 const matchesList = matches.map((iten) => (
  <ContainerMatches key={iten.id}>
    <img src={iten.photo} alt ="perfis que deram match"/>
    <p>{iten.name} </p>  
  </ContainerMatches>
));
  
  return (
    <div className="all macth">
       {matchesList}
    </div>
  );
}

export default GetMatches;

const ContainerMatches = styled.div`
  border: 1px solid black;
  text-align:center;
  display:flex;
  flex-direction:row;
  align-items:center;
  gap:1vw;
  margin: 1vw;
  padding: 1vh;
  img{
    width:60px;
    height:60px;
    border-radius:50%;
  }
 
  `;