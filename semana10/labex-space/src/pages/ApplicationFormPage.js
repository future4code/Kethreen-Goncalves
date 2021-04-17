import React from "react";
import styled from "styled-components";
import { TiArrowBackOutline } from "react-icons/ti";
import { useHistory } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { urlAllTrips } from "../Components/url-api";
import axios from "axios";
import { goToListTripsPage } from "../Routes/coordinator";
import useRequestData from "../hooks/userRequestData";
import { useForm } from "../hooks/useForm";
import { countryToWord } from "../Components/countryWord";

const initialForm = {
  name: "",
  age: "",
  profession: "",
  applicationText: "",
  country: "",
  tripSelect: "",
};
const ApplicationFormPage = () => {
  const history = useHistory();
  const listTrips = useRequestData(urlAllTrips, []);
  const [form, onChange, resetForm] = useForm(initialForm);

  const applicationToTrip = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      age: Number(form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
      .post(
        `${urlAllTrips}${form.tripSelect}/apply`,
        body
      )
      .then((res) => {
        alert(`Inscrição realizada com sucesso!`);
        goToListTripsPage(history);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getTrips =
    listTrips.trips &&
    listTrips.trips.map((iten) => {
      return (
        <option key={iten.id} value={iten.id}>
          {iten.name} - {iten.planet}
        </option>
      );
    });
    const getCountry =
   countryToWord.map((country) => {
      return (
        <option key={country.codigo} value={country.nome}>
          {country.nome} - {country.sigla3}
        </option>
      );
    });

  return (
    <div>
      <HeaderContainerListPage>
        <BackPage onClick={history.goBack}>
          <TiArrowBackOutline />
        </BackPage>
        <Header />
      </HeaderContainerListPage>

      <MainApplicationForm>
        <div>FAÇA A SUA INSCRIÇÃO</div>

        <form onSubmit={applicationToTrip}>
          <select required name='tripSelect' value={form.tripSelect} onChange={onChange}>
            <option value=''>escolha uma viagem</option>
            {getTrips}
          </select>

          <input
            required
            placeholder='Nome'
            name='name'
            value={form.name}
            pattern={"^.{3,}$"}
            title={"Minimum 3 characters"}
            onChange={onChange}
          ></input>
          <input
            placeholder='Idade'
            name='age'
            value={form.age}
            required
            min="18"
            onChange={onChange}
          ></input>
          <input
            placeholder='Profissão'
            name='profession'
            value={form.profession}
            required
            pattern={"^.{6,}$"}
            title={"Minimum 10 characters"}
            onChange={onChange}
          ></input>
          <input
            required
            placeholder='texto de inscrição'
            name='applicationText'
            value={form.applicationText}
            pattern={"^.{30,}$"}
            title={"Minimum 30 characters"}
            onChange={onChange}
          ></input>
          <select required name='country' value={form.country} onChange={onChange}>
            <option value=''>Selecione seu País</option>
            {getCountry}
          </select>
          
          <button type="submit" >ENVIAR</button>
        </form>
      </MainApplicationForm>
      <Footer />
    </div>
  );
};

export default ApplicationFormPage;

const MainApplicationForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 5%;
  justify-content: center;
  width: clamp(320px, 80%, 700px);
  height: clamp(300px, 60%, 1000px);
  padding: 3%;
  background-color: rgba(250, 252, 255,0.2);
  box-shadow: inset 0 0 1em silver;
  border-radius:50px;
  select{
    font-size: 1.4rem;
    margin: 1%;
    width: 80%;
    border-radius:10px;
    background-color:#313131;
    color:white;
  }
  label{
    align-self:flex-start;
    margin-left:10%;
    font-size: 1.3rem;
    color:white;
    }
  input {
    font-size: 1.4rem;
    margin: 1%;
    width: 80%;
    border-radius:10px;
    background-color:#313131;
    color:white;
    ::placeholder{
      font-size: 0.9rem;
      color:white;
    }
    
  }
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
const HeaderContainerListPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr 2fr;
  width: 100vw;
`;

const BackPage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 70px;
  margin: 10%;
`;
