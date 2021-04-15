import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import {TiArrowBackOutline} from "react-icons/ti"
import axios from "axios"

import styled from "styled-components"
import { goToApplicationFormPage } from "../Routes/coordinator";

const ListTripsPage = () =>  {
  
    const[listTrips, setListTrips] = useState([])
    const history = useHistory();

    useEffect(() =>{
        GetTripsList();
    }, []);


    const GetTripsList= () =>{

         axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/kethreen-cruz/trips/")
        .then((res) => {
            setListTrips(res.data.trips)
   
        })
        .catch((err)=>{
            console.log(err)
            console.log("nao foi")
        })
        
    }

    const getTrips = listTrips.map((iten) => (
        <TripsBalloon key={iten.id}>
            <h3>{iten.name}</h3>
            <p><strong>Saída:</strong> {iten.date}</p>
            <p><strong>Descrição:</strong> {iten.description}</p>
            <p><strong>Planeta:</strong> {iten.planet}</p>
            <p><strong>Duração:</strong> {iten.durationInDays} dias</p>
        </TripsBalloon>
      ));
    
     
  return (
    <div >
        <HeaderContainerListPage>
            <BtnBackPage onClick={history.goBack} ><TiArrowBackOutline/></BtnBackPage>
            <Header/>
            <button  onClick={()=> goToApplicationFormPage(history)}>INCREVA-SE EM UMA VIAGEM</button>
        </HeaderContainerListPage>
     
     <MainListTrips>
        <h1>Lista de Viagens</h1> 
        <div>{getTrips}</div>
     </MainListTrips>
     <Footer/>
    </div>
  );
  
}
export default ListTripsPage ;

const MainListTrips = styled.div`
display:flex;
flex-direction:column;
    h1{
        width:100%;
    }
`;

const TripsBalloon = styled.div`
    width:370px;
    border:1px solid black;
    border-radius:3%;
    padding:1%;
    margin:15px;
    

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