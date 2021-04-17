import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../Routes/coordinator";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Login from "../img/login.png";
import styled from "styled-components";
import background from "../img/backgroundalabx.jpeg";

const HomePages = () => {
  const history = useHistory();
  const user = window.localStorage.getItem("user");
  const [printUser, setPrintUser] = useState("Área Administrativa");
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    logUser();
  });

  function logUser() {
    if (token) {
      let log = user;
      let n = log.indexOf("@");
      let x = log.substring(n, -n);
      setPrintUser(`Olá, ${x}! Admin`);
    }
  }

  return (
    <AppHome>
      <Header />
      <MainContainerHome>
        <section>
          <img
            onClick={() => goToLoginPage(history)}
            alt='login administrativo'
            title='Área Administrativa'
            src={Login}
          />
          <p onClick={() => goToLoginPage(history)}>{printUser}</p>
        </section>
        <SpaceContainer>
          <button onClick={() => goToListTripsPage(history)}>
            VER VIAGENS
          </button>
        </SpaceContainer>
      </MainContainerHome>
      <Footer />
    </AppHome>
  );
};

export default HomePages;

const AppHome = styled.div`
  width: 90vw;
  height: 90vh;
  background-image: linear-gradient(0deg, #1f0a36, #909dbd 120%);
  margin: 2%;
  display: flex;
  flex-direction: column;
  align-self: center;
  border-radius: 30px;
  box-shadow: 4px 10px 30px #261d1d;
`;

const MainContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75vh;
  color: #f9f9f9;

  section {
    width: 88vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 2%;
    cursor: pointer;

    img {
      width: clamp(60px, 6%, 150px);
      height: 100%;
      margin-right: 1.5%;
      :hover {
        transform: scale(1.3);
        transition: all 0.6s ease;
      }
    }
    p {
      width: clamp(100px, 10%, 150px);
      margin-top: 5px;
      font-size: clamp(0.5em, 0.6em + 1vw, 1.1em);
      color: #f9f9f9;
      cursor: pointer;
      :hover {
        transform: scale(1.1);
        transition: all 0.6s ease;
      }
    }
  }
`;
const SpaceContainer = styled.div`
  display: flex;
  justify-content: center;
  width: clamp(250px, 300px,400px);
  height:clamp(250px, 300px,400px);
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 4px 5px 30px #261d1d;
  :hover {
      opacity:0.8;
      transform: scale(1.1);
      transition: all 0.5s ease-in;
      transform: rotate(360deg);
    }
  button {
    width: clamp(230px, 30%, 450px);
    height: 70px;
    background-color: rgba(250, 252, 252, 0.2);
    color: #f9f9f9;
    border-radius: 50px;
    align-self: center;
    font-size: 1.5rem;
    cursor: pointer;
    border-top: 2px solid #eceff2;
    border-left: 2px solid #eceff2;
    :hover {
      background-color: rgba(250, 252, 252, 0.1);
      transform: scale(1.1);
      transition: all 0.6s ease;
  
    }
  }
`;
