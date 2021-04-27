import styled from 'styled-components'


export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height:90vh;
  @media(max-width: 800px){
    flex-direction: column;
  }
`
export const SectionLogoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  h3{
    width: 35vw;
    font-size:28px;
    text-align:justify;
  }
  @media(max-width: 800px){
    width: 100vw;
    h3{
        width: 80vw;
        font-size:20px;
    }
  }
`
export const SectionFormLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  
`

export const SignUpButtonContainer = styled.div`
  width: 80vw;
  max-width: 450px;
`

export const LogoImage = styled.img`
  width:clamp(150px, 50vw, 300px);
  margin-top:2vh;

`