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
      </div>
    );
  }
}

export default Description;
