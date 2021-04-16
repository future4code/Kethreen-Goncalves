import React from "react"
import styled from "styled-components"


const Header = () =>  {
 
    return (
    <HeaderContainer>
      <h1 >LABE X</h1>
      <h3>Space Travel</h3>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
height:15vh;

`;