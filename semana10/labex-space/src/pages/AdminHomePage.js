import React from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToLogout, goToHomePage } from "../Routes/coordinator";
import { urlAllTrips } from "../Components/url-api";
import useRequestData from "../hooks/userRequestData";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styled from "styled-components";
import CreateTripPage from "../pages/CreateTripPage";
import { FaTrashAlt } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti";
import axios from "axios";

const AdminHomePage = () => {
  useProtectedPage();
  const history = useHistory();
  const listTrips = useRequestData(urlAllTrips, []);

  const goToDetailsPage = (id) => {
    history.push(`/admin/trips/${id}`);
  };

  const deleteTrip = (trip, name) => {
    const token = window.localStorage.getItem("token");
    axios
      .delete(
        `${urlAllTrips}${trip}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        alert(`A Viagem ${name} foi deletada!`);
        window.location.reload();
      })
      .catch((error) => {
        alert(`Não foi possível executar o comando, tente mais tarde!`);
        goToHomePage(history);
      });
  };

  const getTrips =
    listTrips.trips &&
    listTrips.trips.map((iten) => {
      return (
        <TripContainer key={iten.id}>
          <DadosTripContainer onClick={() => goToDetailsPage(iten.id)}>
            <p>
              <strong>{iten.name}</strong>
            </p>
            <p>
              <strong>Saída:</strong> {iten.date}
            </p>
            <p>
              <strong>Planeta:</strong> {iten.planet}
            </p>
          </DadosTripContainer>
          <DeleteContainer onClick={() => deleteTrip(iten.id, iten.name)}>
            <FaTrashAlt />
          </DeleteContainer>
        </TripContainer>
      );
    });

  return (
    <div>
      <HeaderContainerListPage>
        <BackPage onClick={() => goToHomePage(history)}>
          <TiArrowBackOutline />
        </BackPage>
        <Header />
        <button onClick={() => goToLogout(history)}>logout</button>
      </HeaderContainerListPage>
      <MainDetails>
        <div>
          <h3>Lista de Viagens</h3>
          <GridCardTrips>{getTrips}</GridCardTrips>
        </div>
        <CreateTripPage />
      </MainDetails>
      <Footer />
    </div>
  );
};
export default AdminHomePage;

// CSS STYLED COMPONENTS =>
const GridCardTrips = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
`;
const MainDetails = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  height: 75vh;
div{
    overflow: auto;
}
`;
const HeaderContainerListPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr 2fr;
  width: 100vw;
  background-color: rgba(250, 252, 255,0.3);
  box-shadow: inset 0 0 1em silver;
  button {
    width: clamp(100px, 50%, 450px);
    height: 50px;
    background-color: rgba(30, 31, 33, 0.4);
    font-weight: 900;
    color: #f9f9f9;
    border-radius: 50px;
    align-self: center;
    font-size: 1.1rem;
    cursor: pointer;
    border-top: 2px solid #eceff2;
    border-left: 2px solid #eceff2;
    :hover {
      background-color: rgba(72, 32, 125, 0.7);
      transform: scale(1.1);
      transition: all 0.4s ease;
    }
    @media(max-width: 800px) {
    grid-column: span 2; 
    margin-top:0;
    justify-self:center;
    width:80%;
    height:100%
    }
  }
`;
const BackPage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 70px;
  margin: 10%;
`;
const TripContainer = styled.div`
  display: grid;
  grid-template-columns: 10fr 1fr;
  align-content: center;
  width: clamp(350px, 25%, 800px);
  border: 1px solid white;
  border-radius: 20px;
  padding: 1%;
  margin: 1%;
  background-color: rgba(30, 31, 33,0.8);
  box-shadow: inset 0 0 1em silver;
  font-weight: 900;
`;
const DadosTripContainer = styled.div`
  p:first-child {
    cursor: pointer;
    max-width: 100%;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
`;
const DeleteContainer = styled.div`
  padding-top: 150%;
  text-align: center;
  cursor: pointer;
`;
