import { createMuiTheme } from "@material-ui/core/styles";
import { neutralColor, primaryColor, secundaryColor } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    text: {
      primary: neutralColor,
    },
    secondary: {
      main: secundaryColor,
      contrastText: "white",
    },
  },
});

export default theme;
