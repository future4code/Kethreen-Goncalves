import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"
import imageLike from "../img/likeimage.gif"
import imageDislike from "../img/dislikeimage.gif"
import loadingImage from "../img/loading.gif"

const  Profiles = () => {
 const [person, setPerson] = useState([]);
 const [loading, setLoading] = useState("stop");

// PEGANDO PERFIS PARA EXIBIR
 const getProfileToChoose = () => {
  axios
    .get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/person"
    )
    .then((response) => {
      setPerson(response.data.profile);
      setLoading("start");

    })
    .catch((err) => console.log(err, "entrou no erro"));
};

 useEffect(() => { 
     getProfileToChoose();  
 }, []);

// ESCOLHENDO DAR LIKE OU NÃO PARA O PERFIL ATRAVÉS DO BOTÃO
  const getChoosePerson = (id,choice) => {  
     axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/choose-person", {
          id,
          choice
        })
      .then((response) => { 
        if (choice===true){
          setLoading("like");
        }else{
          setLoading("nolike");
        }   
        getProfileToChoose();
    
      })
      .catch((err) => alert("erro! tente novamente"));
      setLoading(false); 
      
  };

  return(
    <>
    {loading === "start" ?
    (<>
      <CardMatchContainer>
        <img src={person.photo} alt="Perfis para escolher"/>
        <h3>{person.name}, {person.age} </h3>
        <p>{person.bio} </p> 
        <ButtonNo onClick={ () => getChoosePerson (person.id, false)}>  </ButtonNo> 
        <ButtonLike onClick={ () => getChoosePerson (person.id, true)} > </ButtonLike>
      </CardMatchContainer>
        
    </>
    ) : loading === "nolike" ? 
    ( <img src={imageDislike} 
      width="150" height="150" 
      alt="imagem nolike" /> 
    ) : loading ==="like" ? 
    ( <img src={imageLike} 
      width="200" height="200" 
      alt="imagem like" />
    ) : loading === "stop" ? 
    (<img src={loadingImage} 
    width="200" height="200" 
    alt="imagem loading" />
    ) : (<> </>)
   
}
    </>
  );


}

export default Profiles;


const CardMatchContainer = styled.div`
 text-align:center;

img{
  width:100%;
  height:250px;
  block-size:cover;
  border-radius: 15px 15px 0 0 ;
  cursor: pointer;
 

}
`;



const ButtonLike = styled.button`
  background: url("https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/green_webpict35_1484337168-1.png");
  background-size: cover;
  background-repeat: no-repeat;
  width:70px;
  height:70px;
  border-radius:50%;
  margin-left:4vw;
  background-color: white;
  transition: .4s;
  box-shadow: 0 4px 10px 0 rgba(131, 19, 122, 0.618);
  cursor: pointer;
`;

const ButtonNo = styled.button`

 background: url("https://image.flaticon.com/icons/png/512/458/458594.png");
  background-size: cover;
  background-repeat: no-repeat;
  width:70px;
  height:70px;
  border-radius:50%;
  transition: .4s;
  box-shadow: 0 4px 10px 0 rgba(131, 19, 122, 0.618);
  cursor: pointer;

`;
