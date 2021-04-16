import React from "react"
import { useHistory } from "react-router-dom";
import { useProtectedPage} from "../hooks/useProtectedPage"
import {goToLogout, goToHomePage } from "../Routes/coordinator";
import { urlAllTrips } from "../Components/url-api";
import useRequestData from "../hooks/userRequestData";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import styled from "styled-components"
import CreateTripPage from "../pages/CreateTripPage"
import {FaTrashAlt} from "react-icons/fa"
import {TiArrowBackOutline} from "react-icons/ti"
import axios from "axios";

const AdminHomePage = () =>  {
    useProtectedPage();
    const history = useHistory();
    const listTrips = useRequestData(urlAllTrips, [])

    const goToDetailsPage = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    const deleteTrip = (id) => {
        const token = window.localStorage.getItem("token");
            axios
              .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/kethreen-cruz/trips/${id}`,
              {
                headers: {
                  auth: token,
                },
              }
              )
              .then(() => console.log("entrou"))
    
    
              .catch((error) => console.log(error))
        
      }


    const getTrips = listTrips.trips && listTrips.trips.map((iten) => {
        return (
            <TripContainer key={iten.id}>
                <DadosTripContainer onClick={()=> goToDetailsPage(iten.id)} >
                <p><strong>{iten.name}</strong></p>
                <p><strong>Saída:</strong> {iten.date}</p>
                <p><strong>Planeta:</strong> {iten.planet}</p>
                </DadosTripContainer>
                <DeleteContainer onClick={deleteTrip}>
                <FaTrashAlt/>
                </DeleteContainer>
            </TripContainer>)
    });





return(
    <div >
   <HeaderContainerListPage>
            <BackPage onClick={()=> goToHomePage(history)}  ><TiArrowBackOutline/></BackPage>
            <Header/>
            <button onClick={()=> goToLogout(history)}  >logout</button>
        </HeaderContainerListPage>
 <MainDetails>
<div >
<h3>Lista de Viagens</h3>    
<GridCardTrips>
    {getTrips}
    
</GridCardTrips>
</div>
<CreateTripPage/>
 </MainDetails>
 <Footer/>
</div>
)
}
export default AdminHomePage;

// CSS STYLED COMPONENTS =>
const GridCardTrips= styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
overflow:auto;

`;
const MainDetails = styled.div`
    display:grid;
    grid-template-columns: 3fr 2fr;
    height:75vh;
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
const TripContainer = styled.div`
    display:grid;
    grid-template-columns:10fr 1fr;
    align-content:center;
    width:320px;
    height:100px;
    border:1px solid black;
    border-radius:15px;
    padding:1%;
    margin:1%;

    `;
const DadosTripContainer = styled.div`
    p:first-child{
        cursor:pointer;
        max-width: 100%;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        }
    `;
const DeleteContainer = styled.div`
    padding-top:150%;
    text-align:center;
    cursor: pointer;

    `;