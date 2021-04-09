import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"
import imageLike from "../img/likeimage.gif"
import imageDislike from "../img/dislikeimage.gif"
import loadingImage from "../img/loading.gif"

const  Profiles = () => {
 const [person, setPerson] = useState([]);
 const [loading, setLoading] = useState("stop");
 const [reset, setReset] = useState(1);

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
    .catch((err) => console.log(err, "Não há mais Astros para ver! Limpe seis Swipes e Match"));

  
};

 useEffect(() => { 
     getProfileToChoose();
   }, []);

 

  const clear = () =>  {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/kethreen-cruz/clear"
    )
    .then((response) => {

    })
    .catch((err) => alert("erro! tente novamente"));

  };

  useEffect(() => { 
    if (reset >= 23){
      clear();
      console.log(reset);
      setReset(1); 
    }

  }, [reset]);
 
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
      setReset(reset+1);
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
    ( <ImageLoad><img src={imageDislike} 
      width="150" height="150" 
      alt="imagem nolike" /></ImageLoad> 
    ) : loading ==="like" ? 
    ( <ImageLoad><img src={imageLike} 
      width="200" height="200" 
      alt="imagem like" /></ImageLoad>
    ) : loading === "stop" ? 
    (<ImageLoad><img src={loadingImage} 
    width="200" height="200" 
    alt="imagem loading" /></ImageLoad>
    ) : (<> </>)
   
}
    </>
  );


}

export default Profiles;
const ImageLoad = styled.div`
margin:40%;
transition: 4s;
`;

const CardMatchContainer = styled.div`
 text-align:center;
 background-color:#783cb5;
 box-shadow: 0 0px 20px 0 rgba(69, 71, 94);
 height:100%;
 width:100%;
 border-radius: 15px;
 font-family:Arial, Helvetica, sans-serif;
 
 @keyframes entrace {
  
    100%{
        transform: translateX(0);
        opacity: 1;
      }
    0%{
        transform: translateX(200px)  translateY(-40px);
        opacity: 0.3;
    }
}
animation: entrace 0.8s;

img{
  margin-top:1.5vh;
  width:90%;
  height:58%;
  background-color:yellow;
  inline-size:cover;
  border-radius: 15px 15px 0 0 ;
  cursor: pointer;
}
h3{
  margin:1vh;
  height:6%;
  width:100%;
  font-size:1.3rem;
  @media(max-width: 800px) {
    font-size:1rem;
   }
}
p{
  margin:2vh 0 2vh 0;
  height:10%;
  width:100%;
  font-size:1rem;
  @media(max-width: 800px) {
    font-size:0.8rem;
   }
}
`;

const ButtonLike = styled.button`
  background: url("https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/green_webpict35_1484337168-1.png");
  background-size: cover;
  background-repeat: no-repeat;
  width:60px;
  height:60px;
  border-radius:50%;
  margin-left:5vw;
  background-color: white;
  transition: .4s;
  opacity: 0.7;
  box-shadow: 0 4px 10px 0 rgba(216, 222, 232, 0.418);
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  @media(max-width: 800px) {
    width:40px;
  height:40px;
   }
`;

const ButtonNo = styled.button`

 background: url("https://image.flaticon.com/icons/png/512/458/458594.png");
  background-size: cover;
  background-repeat: no-repeat;
  width:60px;
  height:60px;
  border-radius:50%;
  transition: .4s;
  opacity: 0.7;
  box-shadow: 0 4px 10px 0 rgba(216, 222, 232, 0.418);
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  @media(max-width: 800px) {
    width:40px;
  height:40px;
   }
`;
