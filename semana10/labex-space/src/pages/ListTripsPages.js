import React from "react"
import { useHistory } from "react-router-dom";
import useRequestData from "../hooks/userRequestData";
import { goToApplicationFormPage } from "../Routes/coordinator";
import { urlAllTrips } from "../Components/url-api";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import {TiArrowBackOutline} from "react-icons/ti"
import styled from "styled-components"

const ListTripsPage = () =>  {
    const history = useHistory();
    const listTrips = useRequestData(urlAllTrips, [])

    const getTrips = listTrips.trips && listTrips.trips.map((iten) => {
        return (
            <CardTrip key={iten.id}>
                <h3>{iten.name}</h3>
                <p><strong>Saída:</strong> {iten.date}</p>
                <p><strong>Descrição:</strong> {iten.description}</p>
                <p><strong>Planeta:</strong> {iten.planet}</p>
                <p><strong>Duração:</strong> {iten.durationInDays} dias</p>
            </CardTrip>);
    });
    
    return (
        <div >
            <HeaderContainerListPage>
                <BtnBackPage onClick={history.goBack} ><TiArrowBackOutline/></BtnBackPage>
                <Header/>
                <button  onClick={()=> goToApplicationFormPage(history)}>INCREVA-SE EM UMA VIAGEM</button>
            </HeaderContainerListPage>
            <MainListTrips>
                <h1>Lista de Viagens</h1> 
                <GridCardTrips>{getTrips}</GridCardTrips>
            </MainListTrips>
            <Footer/>
        </div>
  );
}
export default ListTripsPage ;

// CSS - STYLED COMPONENTS =>

const CardTrip= styled.div`
    width: clamp(350px, 25%, 800px); 
    border:1px solid black;
    border-radius:10px;
    padding:1%;
    margin:1%;
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
const BtnBackPage = styled.div`
display:flex;
flex-direction:column;
font-size:70px;
margin:10%;
`;
const MainListTrips = styled.div`
display:flex;
flex-direction:column;
height:75vh;
overflow:auto;
    h1{
        width:100%;
    }
`;
const GridCardTrips= styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;

`;


