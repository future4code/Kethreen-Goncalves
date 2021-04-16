import React from "react"
import styled from "styled-components"
import {TiArrowBackOutline} from "react-icons/ti"
import { useHistory } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { urlAllTrips } from "../Components/url-api";
import axios from "axios";
import { goToAdminHomePage } from "../Routes/coordinator";
import useRequestData from "../hooks/userRequestData";
import { useForm } from "../hooks/useForm";

const initialForm ={
  name:"",
  age:"",
  profession:"",
  applicationText:"",
  country:"",
  tripSelect:""
} 
const ApplicationFormPage = () =>  {
    const history = useHistory();
    const listTrips = useRequestData(urlAllTrips, []);
    const [form, onChange, resetForm] = useForm(initialForm);
    
      const applicationToTrip = () =>{
              const body = {
              name: form.name,
              age: form.age,
              applicationText: form.applicationText,
              profession: form.profession, 
              country: form.country
          }
          axios.post(`"https://us-central1-labenu-apis.cloudfunctions.net/labeX/kethreen-cruz/trips/${form.tripSelect}/apply"`, body)
          .then((res) => {
            console.log("entrou na requisição")
            goToAdminHomePage(history);
              
          })
          .catch((err)=> {
              console.log(err.message);
              console.log("não entrou")
          })
        }

        const getTrips = listTrips.trips && listTrips.trips.map((iten) => {
          return(
          <option key={iten.id}  value={iten.id}>{iten.name}</option>
      )
        });
    
        const handleClick = (event) => {
          event.preventDefault();
          console.log(form);
          resetForm();
        };

       




  return (
<div >
        <HeaderContainerListPage>
            <BackPage onClick={history.goBack} ><TiArrowBackOutline/></BackPage>
            <Header />
          
        </HeaderContainerListPage>
     
        <MainApplicationForm>
        <div>FAÇA A SUA INSCRIÇÃO</div>

        <form onSubmit={handleClick}>

            <select name="tripSelect" 
              value={form.tripSelect} 
              onChange={onChange}> 
            <option value="" >
              escolha uma viagem
            </option>
              {getTrips}
            </select>
            
              <input 
                  placeholder="Nome" 
                  name="name" 
                  value={form.name} 
                  onChange={onChange}>
                </input>
                <input 
                  placeholder="Idade" 
                  name="age" 
                  value={form.age} 
                  onChange={onChange}>
                </input>
                <input 
                  placeholder="Profissão" 
                  name="profession"
                  value={form.profession} 
                  onChange={onChange}>
                </input>
                <input 
                  placeholder="texto de inscrição" 
                  name="applicationText"
                  value={form.applicationText} 
                  onChange={onChange}>
                </input>
                <input 
                  placeholder="País" 
                  name="country"
                  value={form.country} 
                  onChange={onChange}>
                </input>
      
          <button onClick={applicationToTrip}>ENVIAR</button>
       </form>
     </MainApplicationForm>
     <Footer/>
    </div>)

}


export default ApplicationFormPage;


const MainApplicationForm = styled.div`
display:flex;
flex-direction:column;
width:300px;
height:300px;
align-items:center;
align-self:center;
background-color:#e9f2eb;
gap:5%;


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