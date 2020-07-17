import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./App.css";

class Sheader extends Component {
  render() {
    return (
      <div style={{ marginBottom: 50 }}>
        <div className="header_logo">
          <img src="mobile/Kobo360.png" alt="logo" style={{ height: 150 }} />
        </div>
        <div className="header">
          <div className="heading"> Flatfile</div>
        </div>
      </div>
    );
  }
}

export default Sheader;
