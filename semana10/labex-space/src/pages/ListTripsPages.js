import React from "react"
import { useHistory } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import {TiArrowBackOutline} from "react-icons/ti"
import Login from "../img/login.png"
import styled from "styled-components"
import { goToApplicationFormPage } from "../Routes/coordinator";

const ListTripsPage = () =>  {
    const history = useHistory();


  return (
    <div >
        <HeaderContainerListPage>
            <BackPage onClick={history.goBack} ><TiArrowBackOutline/></BackPage>
            <Header/>
            <button  onClick={()=> goToApplicationFormPage(history)}>INCREVA-SE EM UMA VIAGEM</button>
        </HeaderContainerListPage>
     
     <MainListTrips>

        lista de viagens
     </MainListTrips>
     <Footer/>
    </div>
  );
}
export default ListTripsPage;

const MainListTrips = styled.div`
display:flex;
flex-direction:column;
font-size:100px;

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