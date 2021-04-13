import React from "react"
import { useHistory } from "react-router-dom";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import styled from "styled-components"
import CreateTripPage from "../pages/CreateTripPage"
import {FaTrashAlt} from "react-icons/fa"
import {TiArrowBackOutline} from "react-icons/ti"
import { goToTripDetailsPage } from "../Routes/coordinator";

const AdminHomePage = () =>  {
    const history = useHistory();

  return (
    <div >
   <HeaderContainerListPage>
            <BackPage onClick={history.goBack} ><TiArrowBackOutline/></BackPage>
            <Header/>
            <button  >logout</button>
        </HeaderContainerListPage>
 <MainDetails>
<div onClick={()=> goToTripDetailsPage(history)}>
<h3>Lista de Viagens</h3>    
<div>VIagem tal para a lua
    <FaTrashAlt/>
</div>
</div>
<CreateTripPage/>
 </MainDetails>
 <Footer/>
</div>
);
}

export default AdminHomePage;



const MainDetails = styled.div`
display:grid;
grid-template-columns: 3fr 2fr;

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