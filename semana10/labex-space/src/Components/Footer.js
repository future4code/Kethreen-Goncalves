import React from "react"
import {ImFacebook2, ImWhatsapp, ImInstagram,ImTwitter} from "react-icons/im"
import styled from "styled-components"

const Footer = () =>  {
 
    return (
    <FooterContainer>
        <div>
            <ImInstagram/>

            <ImTwitter/>
            
            <ImWhatsapp/>
            
            <ImFacebook2/>
        </div>
      <h4> 
          Labe X
      </h4>
      <h6>
          Av. do Futuro, 2050.
      </h6>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div `
display:grid;
grid-template-columns: 1fr 1fr 1fr;
width:100vw;
justify-items:center;
align-items:center;

    div{
       display:flex;
       flex-direction:row;
       gap:10%;
       width:100%;
       margin-left:30%;       
    }
`;

