import React from "react";
import ReactDOM from "react-dom";
import SimpleTabs from "./TabContainer";
import CustomAppBar from "./CustomAppBar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { PRIMARY_COLOR } from "./Constants";
import "./styles.css";

var theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: PRIMARY_COLOR
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CustomAppBar />
      <SimpleTabs />
    </MuiThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
