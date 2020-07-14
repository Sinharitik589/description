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
    );
  }
}

export default Description;
