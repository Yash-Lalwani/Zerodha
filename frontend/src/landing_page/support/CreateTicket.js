import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <p className="text-muted fs-5 mt-5">
          To create a ticket, select a relevant topic
        </p>

        {/* Account Opening */}
        <div className="col-4 fs-5 mb-5 mt-5">
          <p className="ms-2">
            <i className="fa-solid fa-circle-plus me-2"></i> Account Opening
          </p>
          <a href="/" style={{ textDecoration: "none", lineHeight: "1.2rem" }}>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Resident individual
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>Minor</p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Non Resident Indian (NRI)
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Company, Partnership, HUF and LLP
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>Glossary</p>
          </a>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-4 fs-5 mb-5 mt-5">
          <p className="ms-2">
            <i className="fa-regular fa-user me-3"></i>Your Zerodha Account
          </p>
          <a href="/" style={{ textDecoration: "none", lineHeight: "1.2rem" }}>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Your Profile
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Account modification
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Client Master Report (CMR) and Depository Participant (DP)
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>Nomination</p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Transfer and conversion of securities
            </p>
          </a>
        </div>

        {/* Kite */}
        <div className="col-4 fs-5 mb-5 mt-5">
          <p className="ms-2">
            <i className="fa-solid fa-chart-simple me-3"></i>Kite
          </p>
          <a href="/" style={{ textDecoration: "none", lineHeight: "1.2rem" }}>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>IPO</p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Trading FAQs
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Margin Trading Facility (MTF) and Margins
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Charts and orders
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Alerts and Nudges
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>General</p>
          </a>
        </div>

        {/* Funds */}
        <div className="col-4 fs-5 mb-5 mt-5">
          <p className="ms-2">
            <i className="fa-solid fa-wallet me-2"></i> Funds
          </p>
          <a href="/" style={{ textDecoration: "none", lineHeight: "1.2rem" }}>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>Add money</p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Withdraw money
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Add bank accounts
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>eMandates</p>
          </a>
        </div>

        {/* Console */}
        <div className="col-4 fs-5 mb-5 mt-5">
          <p className="ms-2">
            <i className="fa-brands fa-chrome me-3"></i> Console
          </p>
          <a href="/" style={{ textDecoration: "none", lineHeight: "1.2rem" }}>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>Portfolio</p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Corporate actions
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Funds statement
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>Reports</p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>Profile</p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>Segments</p>
          </a>
        </div>

        {/* Coin */}
        <div className="col-4 fs-5 mb-5 mt-5">
          <p className="ms-2">
            <i className="fa-solid fa-coins me-2"></i> Coin
          </p>
          <a href="/" style={{ textDecoration: "none", lineHeight: "1.2rem" }}>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Mutual funds
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              National Pension Scheme (NPS)
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Features on Coin
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>
              Payments and Orders
            </p>
            <p style={{ fontSize: "0.9rem", marginLeft: "45px" }}>General</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
