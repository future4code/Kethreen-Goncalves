import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToobar } from "./styled";
import { goToFeedPage, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();

  return (
    <AppBar position='static'>
      <StyledToobar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        <Button onClick={() => goToFeedPage(history)} color='inherit'>
          LabEddit
        </Button>
        <Button onClick={() => goToLogin(history)} color='inherit'>
          Login
        </Button>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
