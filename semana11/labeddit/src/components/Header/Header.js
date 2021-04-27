import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToobar } from "./styled";
import { goToFeedPage, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem("token")
  const [stateTextButtonLog, setStateTextButtonLog ] = useState(token ? "Logout" : "Login")

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userName")
    goToLogin(history)
    setStateTextButtonLog("Login")
  }

  return (
    <AppBar position='static'>
      <StyledToobar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        <Button onClick={() => goToFeedPage(history)} color='inherit'>
          LabEddit
        </Button>
        <Button onClick={() => logout()} color='inherit'>
         {stateTextButtonLog}
        </Button>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
