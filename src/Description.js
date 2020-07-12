import React, { Component } from "react";

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
        {/*  <div className="tag-container">
          <div style={{ fontSize: 30, fontWeight: 600, marginBottom: 20 }}>
            Tags:
          </div>

          <div className="tags">
            <div className="chip-wrapper">
              <div className="tag-chip">SDL</div>
            </div>
            <div className="chip-wrapper">
              <div className="tag-chip">Mobile Application</div>
            </div>
            <div className="chip-wrapper">
              <div className="tag-chip">Docker</div>
            </div>
            <div className="chip-wrapper">
              <div className="tag-chip">Open-Source Development</div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <div className="description-button">Get Employee Refferal</div>
          <div
            className="description-button"
            style={{ backgroundColor: "#07b407" }}
          >
            View Openings
          </div>
        </div>
 */}{" "}
      </div>
    );
  }
}

export default Description;
