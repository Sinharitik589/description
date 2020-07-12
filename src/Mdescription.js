import React, { Component } from "react";

class Mdescription extends Component {
  render() {
    return (
      <div>
        <div className="mobile-description">
          <div className="mobile-company-description">
            <h1 style={{ fontSize: 20, marginBottom: 22 }}>Description</h1>
            Flatfile is the developer of a database software designed to import,
            map, and normalize customer data. Flatfile was built to transform
            the data import experience from painful to productive. As the
            world’s first intuitive data importer, Flatfile leverages aggregate
            learnings from its massive user base to improve the import process
            over time without any additional manual effort
          </div>
          <div className="des-button-wrapper">
            <div className="mobile-description-button">
              <div className="button-logo">
                <img src="mobile/download.png" />
              </div>
              <div className="button-value" style={{ flex: 3 }}>
                Get Employee Refferal
              </div>
            </div>
            <div className="mobile-description-button-1">
              <div className="button-logo">
                <img src="mobile/download1.png" />
              </div>
              <div className="button-value" style={{ flex: 3 }}>
                View Openings
              </div>
            </div>
          </div>
        </div>

        <img className="description-mainellipse" src="mobile/Path 1.svg" />

        <img className="blue-yellow-pink" src="mobile/Group 143.svg" />
        <div className="description-top-blue">
          <div className="company-description">
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "white",
                marginBottom: 4,
              }}
            >
              Flatfile
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, color: "white" }}>
              Denver, Colorado
            </div>
          </div>
        </div>
        <img className="descriptions-logo" src="mobile/Group 141.svg" />
      </div>
    );
  }
}

export default Mdescription;
