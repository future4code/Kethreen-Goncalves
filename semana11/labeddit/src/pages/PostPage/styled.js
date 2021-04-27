import styled from "styled-components"
import { Card, CardActions, CardHeader } from "@material-ui/core";


export const StyledCard = styled(Card)`
   margin:1vh;
   width:clamp(350px, 40vw, 800px);

`

export const StyledCardActions = styled(CardActions)`
   display:flex;
   justify-content:space-between;
`
export const AddPostContainer = styled.div`
   display:flex;
   justify-content:center;

`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(350px, 40vw, 800px);

  
`;
export const StyledCardHeader = styled(CardHeader)`
  display: flex;
  flex-direction: column;
  
  
`;