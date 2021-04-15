import React from "react"
import styled from "styled-components"
import {TiArrowBackOutline} from "react-icons/ti"
import { useHistory } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const ApplicationFormPage = () =>  {
    const history = useHistory();

  return (
<div >
        <HeaderContainerListPage>
            <BackPage onClick={history.goBack} ><TiArrowBackOutline/></BackPage>
            <Header/>
          
        </HeaderContainerListPage>
     
        <MainApplicationForm>
       <div>FAÇA A SUA INSCRIÇÃO</div>
       <select id="">
            <option placeholder="Escolha uma Viagem" value=""></option>
        </select>
       <input type="text" placeholder="Nome" value="" ></input>
       <input type="number" placeholder="Idade" value="" ></input>
       <input type="text" placeholder="Profissão" value="" ></input>
       <select name="paises" id="paises">
            <option value="Brasil" selected="selected">Brasil</option>
            <option value="USA">USA</option>
            <option value="África do Sul">África do Sul</option>
            <option value="Albânia">Albânia</option>
            <option value="Chile">Chile</option>
        </select>
       <input type="text" placeholder="Fale sobre você:" value="" ></input>

       <button>ENVIAR</button>
     </MainApplicationForm>
     <Footer/>
    </div>

  );
}

export default ApplicationFormPage;


const MainApplicationForm = styled.div`
display:flex;
flex-direction:column;
width:300px;
height:300px;
align-items:center;
align-self:center;
background-color:#e9f2eb;
gap:5%;


`;



const HeaderContainerListPage = styled.div`
display:grid;
grid-template-columns: 1fr 7fr 2fr;
width:100vw;

button{
    margin:10%;
    width:60%;
    height:30%;
}
`;
const BackPage = styled.div`
display:flex;
flex-direction:column;
font-size:70px;
margin:10%;

`;