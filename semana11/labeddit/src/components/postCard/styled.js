import styled from "styled-components"
import { Card, CardActions } from "@material-ui/core";


export const StyledCard = styled(Card)`
   margin:1vh;
   width:clamp(350px, 40vw, 800px);

`
export const StyledCardActions = styled(CardActions)`
   display:flex;
   justify-content:space-between;
`
