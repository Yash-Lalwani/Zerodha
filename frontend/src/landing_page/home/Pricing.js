import React from "react";

function Pricing() {
  return (
    <div className="container mb-5 mt-5 p-5">
      <div className="row">
        <div className="col-5">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/pricing" style={{ textDecoration: "none" }}>
            see pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-7 d-flex justify-content-between text-center mt-3">
          <div className="col-4 d-flex flex-column align-items-center">
            <img
              src="/media/images/pricingMF.svg"
              style={{ width: "50%" }}
              alt="₹0"
            />
            <p className="text-muted small mb-0">Free account opening</p>
          </div>

          <div className="col-4 d-flex flex-column align-items-center">
            <img
              src="/media/images/pricingMF.svg"
              style={{ width: "50%" }}
              alt="₹0"
            />
            <p className="text-muted small mb-0">Free equity delivery</p>
          </div>

          <div className="col-4 d-flex flex-column align-items-center">
            <img
              src="/media/images/intradayTrades.svg"
              style={{ width: "50%" }}
              alt="₹20"
            />
            <p className="text-muted small mb-0">Intraday and F&amp;O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
