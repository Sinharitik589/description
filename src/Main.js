import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Description from "./Description";

import Tags from "./tags";

class Main extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={8}>
            <Description />
          </Grid>

          <Grid item xs={4}>
            <Grid container>
              <Tags />
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className="des-button-wrappers">
              <div className="description-button">Get Employee Refferal</div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Main;
