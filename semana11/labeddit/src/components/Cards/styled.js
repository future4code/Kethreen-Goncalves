import styled from "styled-components";
import { Avatar, Card, CardActions } from "@material-ui/core";

export const StyledCard = styled(Card)`
  margin: 1vh;
  width: clamp(350px, 40vw, 800px);
`;
export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;
export const StyledAvatar = styled(Avatar)`
  background-color: black;
`;
export const StyledCardComments = styled(Card)`
  margin: 1vh;
  width: clamp(350px, 40vw, 800px);
  display: inline-block;
`;
export const TextCardComments = styled.div`
  padding-left: 10%;
`;

export const CounterCommentsStyle = styled.p`
  font-size:12px;
  display:inline;
  width:80%;
  height:50%;
`;
export const IconVotesCounter = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  height:8vh;
`;