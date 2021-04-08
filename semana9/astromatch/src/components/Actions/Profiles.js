import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"

const  App = () => {
 const [person, setPerson] = useState([]);
 const [matches, setMatches] = useState([]);
 const [atualiza, setAtualiza] = useState(true);


 const getProfileToChoose = () => {
  axios
    .get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/person"
    )
    .then((response) => {
      setPerson(response.data.profile);
      console.log("profiles")
      console.log(response.data.profile);
     
    })

    .catch((err) => console.log(err, "entrou no erro"));
};
 useEffect(() => {
  if (atualiza === true){
     getProfileToChoose();
     setAtualiza (false)
    } 
 }, [matches,atualiza]);

useEffect(() => {
 
const getMatches = () => {
  axios
    .get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/matches"
    )
    .then((response) => {
      setMatches(response.data.matches);
      console.log(response.data.matches);
     
    })


    .catch((err) => console.log(err, "nao pegou o match"));
};
getMatches();
}, []);


  const getChoosePerson = (id,choice) => {
    
     axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/choose-person", {
          id,
          choice
        })
      .then((response) => {     
        setAtualiza(true)
        console.log(response);
        console.log("botao ok, entrou no then");
        
        
      })

      .catch((err) => console.log(err, "nao pegou"));
     
  };


 
  const clearSwipes = () =>  {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/clear"
    )
    .then((response) => {
      
      console.log("limpou")
    })
    .catch((err) => console.log(err, "nao limpou"));
};
    

  function ClearButtonWrapper() {
	  return <ClearButton onClick={clearSwipes}>Limpar swipes e matches</ClearButton>
  }
  
 const CardMatch = () =>{
   return(
     <CardMatchContainer>
      
       <ProfileToChoose/>
       <button onClick={ () => getChoosePerson (person.id, false)}  >X</button>
       <button onClick={ () => getChoosePerson (person.id, true)} > ❤ </button>
       
     </CardMatchContainer>
   )
 } 
 
 const 
 ProfileToChoose = () =>{
   return(
     <div>
       <img src={person.photo} alt="Perfis para escolher"/>
       <h3>{person.name}, {person.age} </h3>
       <p>{person.bio} </p>
     </div>
   )
 } 
 const matchesList = matches.map((iten) => (
  <ContainerMatches key={iten.id}>
    <img src={iten.photo} alt ="perfis que deram match"/>
    <p>{iten.name} </p>  
  </ContainerMatches>
));
  
  return (
    <ContainerApp className="App">
       <TitleApp>
       <button>voltar</button>
       <h1>AstroMatch</h1>
       <button>matches</button>
       </TitleApp>
       <CardMatch/>
       <ClearButtonWrapper/>
       {matchesList}
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.div`
  border: 1px solid black;
  text-align:center;
  width:40%;
  height:80%;
  display:flex;
  flex-direction:column;
  align-items:center;
 
  `;
const TitleApp = styled.div`
  display:flex;
  flex-direction:row;
  gap:5vw;
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

img{
  width:380px;
  height:420px;
}
`;


const ClearButton = styled.button`

bottom: 5px;
right: 5px;
`;
// css matchs
const ContainerMatches = styled.div`
  border: 1px solid black;
  text-align:center;
  width:40%;
  height:80%;
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