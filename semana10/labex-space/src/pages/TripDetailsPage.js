import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import styled from "styled-components"
import { useHistory } from "react-router-dom";
import {TiArrowBackOutline} from "react-icons/ti"


const TripDetailsPage = () =>  {
    const history = useHistory();

  return (
    <div >
    <HeaderContainerListPage>
            <BackPage onClick={history.goBack} ><TiArrowBackOutline/></BackPage>
            <Header/>
            <button  >logout</button>
        </HeaderContainerListPage>

    <MainAdminPage> 
        <div>VIAGEM SELECIONADA</div>
        <div>CANDITADOS APROVADOS</div>
        <div>CANDIDATOS PENDENTES</div>
    </MainAdminPage>

    <Footer/>
</div>
);
   
}

export default TripDetailsPage;
const MainAdminPage = styled.div`
display:grid;
grid-template-columns:1fr 2fr;
grid-template-rows:1fr 1fr;
gap:1%
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
