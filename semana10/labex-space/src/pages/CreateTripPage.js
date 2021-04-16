import React, { useEffect, useState } from 'react';
import {useForm} from "../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router";
import styled from 'styled-components';

  const initialForm ={
    name: '', planet: '', date: '', description: '', durationInDays: ''
  };

const CreateTripPage = () => {
  const history = useHistory();
  const [reload, setReload] = useState(1)
  const [form, onChange, resetForm] = useForm(initialForm);


  const handleClick = (event) => {
    event.preventDefault();
    console.log(form);
    resetForm();
  };

  useEffect(() => {
   
    }, [history, reload]);

  const createTrip = () => {
    const token = window.localStorage.getItem('token')

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    }; 

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kethreen-cruz/trips",
        body , 
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        console.log(response.data);
      
        setReload(reload+1)
      })
      .catch((error) => {
        alert(error);
      });
      
  };

    return(
        <Form onSubmit={handleClick}>
          <input placeholder="Nome" name='name' onChange={onChange} value={form.name} type='text' />
          <input placeholder="Planeta" name='planet' onChange={onChange} value={form.planet} type='text' />
          <input placeholder="Data" name='date' onChange={onChange} value={form.date} type='date' />
          <input placeholder="Descrição" name='description' onChange={onChange} value={form.description} />
          <input placeholder="Duração em Dias" name='durationInDays' onChange={onChange} value={form.durationInDays} type='number' />
          <button onClick={createTrip}>Enviar</button>
        </Form>
    );
};

export default CreateTripPage; 

// CSS STYLED COMPONENTS

const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:white;
width: clamp(320px, 80%, 700px);
height:clamp(300px, 60%, 1000px);
padding:3%;
  input{
    font-size:1.2rem;
    margin:1%;
    width: 80%;
  }
  button{
    font-size:1.2rem;
    margin-top:2%;
    width:20%;

  }
`;