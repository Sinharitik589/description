import React, { Component } from "react";

class Mdescription extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="header">
          <div className="mainellipse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="415.228"
              height="399.021"
              viewBox="0 0 415.228 399.021"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M-44,268.217s2.018-67.16,49.831-62.106,208.305-10.39,275.991-10.39S371.228,130.8,371.228,130.8V-130.8H-44Z"
                transform="translate(44 130.804)"
                fill="#FEE9CE"
              />
            </svg>
          </div>

          <div className="blue-yellow-pink">
            <svg
              width="298"
              height="263"
              viewBox="0 0 298 263"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="179.5" cy="118" rx="118.5" ry="118" fill="#FEFFFD" />
              <ellipse cx="178.5" cy="118" rx="84.5" ry="83" fill="#FFDD83" />
              <ellipse cx="43.5" cy="167" rx="43.5" ry="43" fill="#4F51C0" />
              <ellipse cx="204" cy="239" rx="25" ry="24" fill="#FF91A5" />
            </svg>
          </div>
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
          <div className="back-button">
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.9231 11L12.524 19.3174C13.1587 19.9311 13.1587 20.9261 12.524 21.5397C11.8894 22.1534 10.8606 22.1534 10.226 21.5397L0.475951 12.1112C-0.158651 11.4975 -0.158651 10.5025 0.475951 9.88883L10.226 0.46026C10.8606 -0.153421 11.8894 -0.153421 12.524 0.46026C13.1587 1.07394 13.1587 2.06891 12.524 2.68259L3.9231 11Z"
                fill="#545151"
              />
            </svg>
          </div>
          <div className="description-logos">
            <svg
              width="74"
              height="74"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="74" height="74" rx="24" fill="#FEFEFF" />
              <path
                d="M37.3846 55.387C42.4795 55.387 46.7567 53.748 49.8809 50.9209L43.9262 46.4137C42.3328 47.4995 40.1941 48.2575 37.3846 48.2575C32.3945 48.2575 28.1592 45.0412 26.6494 40.5956L26.4281 40.6139L20.6033 45.0186L20.5271 45.2255C23.6302 51.2486 30.0042 55.387 37.3846 55.387Z"
                fill="#34A853"
              />
              <path
                d="M55.4999 37.359C55.4999 35.843 55.374 34.7367 55.1015 33.5895H37.3844V40.432H47.7839C47.5743 42.1325 46.4421 44.6933 43.926 46.4141L43.8908 46.6432L49.4926 50.8835L49.8807 50.9213C53.445 47.7048 55.4999 42.9724 55.4999 37.359Z"
                fill="#4285F4"
              />
              <path
                d="M26.6495 40.5957C26.2511 39.4485 26.0206 38.2192 26.0206 36.9491C26.0206 35.6788 26.2511 34.4497 26.6285 33.3024L26.618 33.0581L20.7202 28.5826L20.5272 28.6723C19.2483 31.1717 18.5144 33.9785 18.5144 36.9491C18.5144 39.9197 19.2483 42.7263 20.5272 45.2257L26.6495 40.5957Z"
                fill="#FBBC05"
              />
              <path
                d="M37.3846 25.6403C40.9279 25.6403 43.3181 27.1359 44.681 28.3857L50.0066 23.3049C46.7359 20.3343 42.4795 18.511 37.3846 18.511C30.0042 18.511 23.6302 22.6493 20.5271 28.6724L26.6285 33.3024C28.1592 28.8568 32.3945 25.6403 37.3846 25.6403Z"
                fill="#EB4335"
              />
            </svg>
          </div>
        </div>
        <div className="mobile-company-description">
          Flatfile is the developer of a database software designed to import,
          map, and normalize customer data. Flatfile was built to transform the
          data import experience from painful to productive. As the world’s
          first intuitive data importer, Flatfile leverages aggregate learnings
          from its massive user base to improve the import process over time
          without any additional manual effort
        </div>
        <div className="tag-heading">Tags:</div>
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
    );
  }
}

export default Mdescription;
