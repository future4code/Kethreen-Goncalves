import React from 'react'
import styled from "styled-components"
import offMatch from "../img/offMatch.gif"

const  GetMatches = (props) => {


 const matchesList = props.matches.map((iten) => (
  <MatchesCards key={iten.id}>
    <img src={iten.photo} alt ="perfis que deram match"/>
    <p>{iten.name} </p>  
  </MatchesCards>
));

const load = props.matches.length

return (

    <ContainerMatch>
    {!load ? (<> <img src={offMatch} 
     width="200" height="200" alt="logo"/>
      <h3>VOCÊ NÃO TEM MATCHS ! </h3> </>) 
    :  (  <div>
       {matchesList}
    </div>  ) }
    </ContainerMatch>


    
  );
}

export default GetMatches;

const ContainerMatch = styled.div`
width:100%;
height:80%;
overflow:auto;
`;
const MatchesCards = styled.div`
  text-align:center;
  border-radius:15px;
  display:flex;
  flex-direction:row;
  align-items:center;
  width:70%;
  gap:1vw;
  margin: 1vw 0 0 2vw;
  padding: 1vh;
  box-shadow: 0 0px 8px 0 rgba(79, 81, 84);
  
  img{
    width:80px;
    height:80px;
    border-radius:50%;
    box-shadow: 0 0px 20px 0 rgba(79, 81, 84);
  }
 
  `;