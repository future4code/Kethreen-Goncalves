import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"

const  App = () => {
 const [person, setPerson] = useState([]);

 


 useEffect(() => {
 
  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/person"
      )
      .then((response) => {
        setPerson(response.data);
        console.log(response);
        console.log(response.data);
        console.log(response.data.profile);
      })

      .catch((err) => console.log(err, "entrou no er"));
  };
  getProfileToChoose();
}, [setPerson]);

 
  const 
  ProfileToChoose = () =>{
    return(
      <div>
        <img src={person.profile.photo}></img>
        <h3>{person.profile.name}</h3>
        <p>`{person.profile.age} Anos, {person.profile.bio} buscando Viver a vida loucamente`</p>
      </div>
    )
  } 

  
 const CardMatch = () =>{
   return(
     <CardMatchContainer>
      
       <ProfileToChoose/>
       <button>X</button>
       <button>❤</button>
     </CardMatchContainer>
   )
 } 
  
  return (
    <ContainerApp className="App">
       <h1>AstroMatch</h1>
       <CardMatch/>

    </ContainerApp>
  );
}

export default App;
const ContainerApp = styled.div`
  border: 1px solid black;
  text-align:center;
  width:40%;
  display:flex;
  flex-direction:column;
  align-items:center;
 
  `;

const CardMatchContainer = styled.div`
  border: 1px solid black;
  width:86%;
  text-align:center;
button{
  border-radius:50%;
  margin:15%;
  width:60px;
  height:60px
}
`;