/* import React, { Component } from "react";
import $ from "jquery";
class Description extends Component {
  render() {
    return (
      <div className="description">
        <img className="description-logo" src="logo.svg" />
        <div className="description-header">Flatfile</div>
        <div className="description-subheader">Denver, Colorado</div>
        <div className="description-body">
          Flatfile is the developer of a database software designed to import,
          map, and normalize customer data. Flatfile was built to transform the
          data import experience from painful to productive. As the world’s
          first intuitive data importer, Flatfile leverages aggregate learnings
          from its massive user base to improve the import process over time
          without any additional manual effort
        </div>
        <div className="tags">
          <div className="chip-wrapper">
            <div className="tag-chips">SDL</div>
          </div>
          <div className="chip-wrapper">
            <div className="tag-chips">Mobile Application</div>
          </div>
          <div className="chip-wrapper">
            <div className="tag-chips">Docker</div>
          </div>

          <div className="chip-wrapper">
            <div className="tag-chips">Mobile Application</div>
          </div>
          <div className="chip-wrapper">
            <div className="tag-chips">Docker</div>
          </div>
          <div className="chip-wrapper">
            <div className="tag-chips">SDL</div>
          </div>
          <div className="chip-wrapper">
            <div className="tag-chips">Artificial Intelligence</div>
          </div>
        </div>

        <div className="des-button-wrappers">
         
          <div className="description-button">Get Employee Refferal</div>
        </div>
      </div>
    );
  }
}

export default Description;
 */
import React, { Component } from "react";
import { Divider, Typography } from "@material-ui/core";
import Chip from "./Chip";
class Description extends Component {
  render() {
    return (
      <div>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: "lighter", marginBottom: 30 }}
        >
          Denver, Colorado
        </Typography>
        <Divider />
        <p className="main">
          Flatfile is the developer of a database software designed to import,
          map, and normalize customer data. Flatfile was built to transform the
          data import experience from painful to productive. As the world’s
          first intuitive data importer, Flatfile leverages aggregate learnings
          from its massive user base to improve the import process over time
          without any additional manual effort
          <br />
          <br />
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: 35 }}>
            <Chip label="Sdl" />
            <Chip label="Mobile Application" />
            <Chip label="Docker" />
            <Chip label="Open Source Development" />
          </div>
        </p>
      </div>
    );
  }
}

export default Description;
