import React from "react";
import "./App.css";
import Description from "./Description";
import Mdescription from "./Mdescription";

import { Hidden } from "@material-ui/core";
import mheading from "./mheading";

function App() {
  return (
    <div>
      <Hidden only={["xs"]}>
        <Description />
      </Hidden>
      <Hidden only={["lg", "md", "sm", "xl"]}>
        <Mdescription />
      </Hidden>
    </div>
  );
}

export default App;
