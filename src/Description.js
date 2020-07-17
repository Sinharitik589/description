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

class Description extends Component {
  render() {
    return (
      <div>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: "lighter", marginBottom: 30 }}
        >
          Nigeria
        </Typography>
        <Divider />
        <p className="main">
          Kobo360, is a privately owned, pan-african technology company
          disrupting and leading African third-party logistics industry.
          <br />
          <br />
          Through an all-in-one robust platform that instantly connects cargo
          owners to trucks and drivers, Kobo uses big data and agile technology
          to reduce friction and scale efficiency in the African logistics
          ecosystem.
          <br />
          <br /> The company has designed effective solutions for the challenges
          in the logistics space by connecting asset owners in the industry with
          the MSMEs that need their services.
          <br />
          <br /> Kobo is also preparing to enter the agro-trading space by
          developing a marketplace that connects farmers with buyers all over
          the world. The marketplace will effectively eliminate the high cost of
          middlemen for smallholder farmers and significantly increase their
          profits.
          <br />
          <br />
        </p>
      </div>
    );
  }
}

export default Description;
