import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"

const  Profiles = () => {
 const [person, setPerson] = useState([]);
 const [atualiza, setAtualiza] = useState(true);

// PEGANDO PERFIS PARA EXIBIR
 const getProfileToChoose = () => {
  axios
    .get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/person"
    )
    .then((response) => {
      setPerson(response.data.profile);
    })
    .catch((err) => console.log(err, "entrou no erro"));
};

 useEffect(() => {
  if (atualiza === true){
     getProfileToChoose();
     setAtualiza (false)
    } 
 }, [atualiza]);

// ESCOLHENDO DAR LIKE OU NÃO PARA O PERFIL ATRAVÉS DO BOTÃO
  const getChoosePerson = (id,choice) => {  
     axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/choose-person", {
          id,
          choice
        })
      .then((response) => {     
        setAtualiza(true)
      })
      .catch((err) => alert("erro! tente novamente"));
  };

 const ProfileToChoose = () =>{
   return(
     <div>
       <img src={person.photo} alt="Perfis para escolher"/>
       <h3>{person.name}, {person.age} </h3>
       <p>{person.bio} </p>
     </div>
   )
 } 
 const ButtonToChoosePerson = () =>{
 return(
  <CardButtonChosse>
    <button onClick={ () => getChoosePerson (person.id, false)}  >X</button>
    <button onClick={ () => getChoosePerson (person.id, true)} > ❤ </button>
  </CardButtonChosse>
)
 }
  
  return(
    <CardMatchContainer>
      <ProfileToChoose/>
      <ButtonToChoosePerson/>
    </CardMatchContainer>
  )

}

export default Profiles;


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

const CardButtonChosse = styled.div`
button{
  border-radius:50%;
  margin:15%;
  width:60px;
  height:60px
}
`;