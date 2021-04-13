import React from "react"
import styled from "styled-components"

const CreateTripPage = () =>  {

  return (
    <div >
     
     <MainCreateTrip>
       <div>CRIAR VIAGEM</div>
       <input type="text" placeholder="Nome" value="" ></input>
       <select id="">
            <option placeholder="Escolha um paneta" value=""></option>
        </select>
       <input type="data" placeholder="dd/mm/aaaa" value="" ></input>
       <input type="text" placeholder="Descrição:" value="" ></input>
       <input type="Number" placeholder="Duração:" value="" ></input>
       <button>CRIAR</button>
     </MainCreateTrip>
    
    </div>
  );
}

export default CreateTripPage;


const MainCreateTrip = styled.div`
display:flex;
flex-direction:column;
width:300px;
height:300px;
align-items:center;
align-self:center;
background-color:#e9f2eb;
gap:5%;


`;
