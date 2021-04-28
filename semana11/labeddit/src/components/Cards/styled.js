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
