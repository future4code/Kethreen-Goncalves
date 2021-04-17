import React from "react";
import {
  ImFacebook2,
  ImWhatsapp,
  ImInstagram,
  ImTwitter,
} from "react-icons/im";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <a target='_blank' href='https://www.instagram.com/'>
          {" "}
          <ImInstagram />
        </a>

        <a target='_blank' href='https://www.twitter.com/'>
          {" "}
          <ImTwitter />
        </a>

        <a target='_blank' href='https://www.whatsapp.com/'>
          {" "}
          <ImWhatsapp />
        </a>

        <a target='_blank' href='https://www.facebook.com/' >
          <ImFacebook2 />
        </a>
      </div>
      <h4>Labe X</h4>
      <h6>Av. do Futuro, 2050.</h6>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: clamp(100px, 100vw, 100vw);
  height: 10vh;
  justify-items: center;
  align-items: center;
  text-decoration:none; 
  div {
    display: flex;
    flex-direction: row;
    gap: 10%;
    width: clamp(30px, 30vw, 90%);
    margin-left: 30%;
    a{
        text-decoration:none; 
        color:white;
        :hover{
    transform: scale(2.3);
    transition: all 0.3s ease-in;
    }
    }
  }


`;
