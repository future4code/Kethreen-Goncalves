import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import styled from "styled-components"
import { useHistory } from "react-router-dom";
import {TiArrowBackOutline} from "react-icons/ti"
import { useProtectedPage} from "../hooks/useProtectedPage"
import {goToLogout} from "../Routes/coordinator"



const TripDetailsPage = () =>  {
      useProtectedPage();
      const [tripDetail, setTripDetail] = useState([]);
      const [candidates, setCandidates] = useState([]);
      const [approved, setApproved] = useState([]);
      const history = useHistory();
    
      useEffect(() => {
        getTripDetail("lWgQjG4CjOe6mSwlqkbJ");
        
      }, []);

    
      const getTripDetail = (id) => {
        const token = window.localStorage.getItem("token");
    
        axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kethreen-cruz/trip/${id}`,
            {
              headers: {
                auth: token
              }
            }
          )
          .then((res) => {
            setTripDetail(res.data.trip);
            setCandidates(res.data.trip.candidates);
            setApproved(res.data.trip.approved);
           
          })
          .catch((err) => {
            console.log(err);
           
          });
      };

      const decideCandidate= (id,candidatesId) => {
        const token = window.localStorage.getItem("token");
        
        axios
          .put(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/kethreen-cruz/trips/${id}/candidates/${candidatesId}/decide`,
            {
              headers: {
                auth: token
              }
            }
          )
          .then((res) => {
            console.log(res);
           
          })
          .catch((err) => {
            console.log(err);
           
          });
      };
      console.log(tripDetail);

      const tripDetailsPage =  (
        <div >
            <h2>{tripDetail.name}</h2>
            <p><strong>Saída:</strong> {tripDetail.date}</p>
            <p><strong>Descrição:</strong> {tripDetail.description}</p>
            <p><strong>Planeta:</strong> {tripDetail.planet}</p>
            <p><strong>Duração:</strong> {tripDetail.durationInDays} dias</p>
        </div>
      );

     

      const getCandidates = candidates.map((iten) => (
        <li key={iten.id}>
            <h4><strong>Nome:</strong>{iten.name}</h4>
            <p><strong>Idade</strong> {iten.age}</p>
            <p><strong>Sobre:</strong> {iten.applicationText}</p>
            <p><strong>País:</strong> {iten.country} </p>
            <button onClick={()=> decideCandidate("lWgQjG4CjOe6mSwlqkbJ","DU9hwngUH1bMPZHrICZb")}>Aprovar</button>
            <button>Rejeitar</button>
        </li>
      ));
    
      const getApproved = approved.map((iten) => (
        <li key={iten.id}>
            <p>{iten.name}</p>
        </li>
      ));

  return (
    <div >
    <HeaderContainerListPage>
            <BackPage onClick={history.goBack} ><TiArrowBackOutline/></BackPage>
            <Header/>
            <button onClick={()=> goToLogout(history)} >logout</button>
        </HeaderContainerListPage>

    <MainAdminPage> 
        <div>
           
          {tripDetailsPage}
            
        

        </div>
        <div>
            <h1>CANDIDATOS PENDENTES</h1>
          <ul> {getCandidates} </ul>
        </div>
      
        <div>CANDITADOS APROVADOS</div>
        <ul> {getApproved} </ul>
        
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
