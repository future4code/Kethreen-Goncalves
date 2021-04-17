import React from "react";
import { useForm } from "../hooks/useForm";
import axios from "axios";

import styled from "styled-components";
import { urlAllTrips } from "../Components/url-api";

const initialForm = {
  name: "",
  planet: "",
  date: "",
  description: "",
  durationInDays: "",
};

const CreateTripPage = () => {
  const [form, onChange, resetForm] = useForm(initialForm);


  const createTrip = (event) => {
    const token = window.localStorage.getItem("token");

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };
    event.preventDefault();
    axios
      .post(
        `${urlAllTrips}`,body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const today = new Date();
  const minToday =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) +
    "-" +
    ("0" + today.getDate()).substr(-2);

  return (
    <Form onSubmit={createTrip}>
      <h2>CRIAR UMA NOVA VIAGEM</h2>
      <label>Nome da Viagem:</label>
      <input
        required
        placeholder='Nome'
        name='name'
        onChange={onChange}
        value={form.name}
        pattern={"^.{5,}$"}
        title={"Minimum 5 characters"}
      />
      <label>Planeta:</label>
      <select required name='planet' value={form.planet} onChange={onChange}>
        <option value=''>Escolha um Planeta da lista</option>
        <option value='Mercurio'>Mercúrio</option>
        <option value='Venus'>Venus</option>
        <option value='Terra'>Terra</option>
        <option value='Marte'>Marte</option>
        <option value='Jupiter'>Jupiter</option>
        <option value='Saturno'>Saturno</option>
        <option value='Urano'>Urano</option>
        <option value='Netuno'>Netuno</option>
        <option value='Plutao'>Plutão</option>
      </select>
      <label>Data:</label>
      <input
        placeholder='Data'
        name='date'
        onChange={onChange}
        value={form.date}
        type='date'
        min={minToday }
      />
      <label>Descrição:</label>
      <input
        placeholder='Descrição'
        name='description'
        onChange={onChange}
        value={form.description}
        pattern={"^.{30,}$"}
        title={"Minimum 30 characters"}
      />
      <label>Duração:</label>
      <input
        placeholder='Duração em Dias'
        name='durationInDays'
        onChange={onChange}
        value={form.durationInDays}
        type='number'
        min="50"
      />
      <button type="submit">CRIAR</button>
    </Form>
  );
};

export default CreateTripPage;

// CSS STYLED COMPONENTS

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    width: clamp(50px, 30%, 200px);
    height: 40px;
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
