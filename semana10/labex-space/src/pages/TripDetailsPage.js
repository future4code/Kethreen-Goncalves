import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToLogout } from "../Routes/coordinator";
import { urlAllTrips, urlTripDetails } from "../Components/url-api";

const TripDetailsPage = () => {
  useProtectedPage();
  const [tripDetail, setTripDetail] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [approved, setApproved] = useState([]);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = (id) => {
    const token = window.localStorage.getItem("token");
    axios
      .get(
        `${urlTripDetails}${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setTripDetail(res.data.trip);
        setCandidates(res.data.trip.candidates);
        setApproved(res.data.trip.approved);
         
      })
      .catch((err) => {
        alert(err);
      });
  };

  const aproveCandidate = (candidateId, name, aprov) => {
    const token = window.localStorage.getItem("token");
    const body = { approve: aprov };
    axios
      .put(
        `${urlAllTrips}${params.id}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        if (body.approve === true) {
          alert(` A inscrição de ${name} foi Aprovada!`);
          getTripDetail();
        } else if (body.approve === false) {
          alert(`A inscrição de ${name} foi Reprovada!`);
          getTripDetail();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const tripDetailsPage = (
    <CardDetail>
      <h2>{tripDetail.name}</h2>
      <p>
        <strong>Saída:</strong> {tripDetail.date}
      </p>
      <p>
        <strong>Descrição:</strong> {tripDetail.description}
      </p>
      <p>
        <strong>Planeta:</strong> {tripDetail.planet}
      </p>
      <p>
        <strong>Duração:</strong> {tripDetail.durationInDays} dias
      </p>
    </CardDetail>
  );

  const getCandidates = candidates.map((iten) => (
    <CardCandidates key={iten.id}>
      <h4>
        <strong>Nome:</strong>
        {iten.name}
      </h4>
      <p>
        <strong>Idade</strong> {iten.age}
      </p>
      <p>
        <strong>Sobre:</strong> {iten.applicationText}
      </p>
      <p>
        <strong>País:</strong> {iten.country}{" "}
      </p>
      <button onClick={() => aproveCandidate(iten.id, iten.name, true)}>
        Aprovar
      </button>
      <button onClick={() => aproveCandidate(iten.id, iten.name, false)}>
        Reprovar
      </button>
    </CardCandidates>
  ));

  const getApproved = approved.map((iten) => (
    <CardCandidates key={iten.id}>
      <p>{iten.name}</p>
    </CardCandidates>
  ));

  return (
    <div>
      <HeaderContainerListPage>
        <BackPage onClick={history.goBack}>
          <TiArrowBackOutline />
        </BackPage>
        <Header />
        <button onClick={() => goToLogout(history)}>logout</button>
      </HeaderContainerListPage>

      <MainAdminPage>
        <div>
        <h2>DETALHES DA VIAGEM</h2>
          {tripDetailsPage}</div>
        <div>CANDITADOS APROVADOS
        <ul> {getApproved} </ul></div>
        <div>
          <h2>CANDIDATOS PENDENTES</h2>
          <ul> {getCandidates} </ul>
        </div>
      </MainAdminPage>

      <Footer />
    </div>
  );
};

export default TripDetailsPage;

const MainAdminPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 1%;
  
  
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
  }
`;
const BackPage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 70px;
  margin: 10%;
`;
const CardDetail = styled.div`
  width: 80%;
    height: 90%;
    padding:2%;
    border-radius:20px;
background-color: rgba(30, 31, 33,0.8);
box-shadow: inset 0 0 1em silver;
`;
const CardCandidates = styled.li`
  width: 50%;
    height: 90%;
    padding:2%;
    border-radius:20px;
background-color: rgba(30, 31, 33,0.8);
box-shadow: inset 0 0 1em silver;
button{
    width: clamp(5px, 10%, 100px);
    height: 30px;
    background-color: rgba(30, 31, 33, 0.4);
    font-weight: 400;
    color: #f9f9f9;
    border-radius: 10px;
    align-self: center;
    font-size: 0.8rem;
    cursor: pointer;
    border-top: 2px solid #eceff2;
    border-left: 2px solid #eceff2;
    :hover {
      background-color: rgba(72, 32, 125, 0.7);
      transform: scale(1.1);
      transition: all 0.4s ease;
    }

}
`;
