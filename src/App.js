import React from "react";
import "./App.css";
import Description from "./Description";
import Mdescription from "./Mdescription";
import Sheader from "./Sheader";
import { Hidden, Container } from "@material-ui/core";
import Main from "./Main";

function App() {
  return (
    <div>
      <Hidden only={["xs"]}>
        <Container>
          <Sheader />
          <Main />
        </Container>
      </Hidden>
      <Hidden only={["lg", "md", "sm", "xl"]}>
        <Mdescription />
      </Hidden>
    </div>
  );
}

export default App;
