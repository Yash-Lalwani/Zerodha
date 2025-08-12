import React from "react";

function Hero() {
  return (
    <div className="text-center ">
      <div className="p-5">
        <h2 className="fw-semibold fs-1">Charges</h2>
        <p className="text-muted">List of all charges and taxes</p>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row justify-content-center g-5">
          {/* Free equity delivery */}
          <div className="col-12 col-md-4 text-center">
            <img
              src="/media/images/pricingMF.svg"
              alt="₹0"
              style={{ width: "250px" }}
            />
            <h5 className="mt-4 fw-semibold">Free equity delivery</h5>
            <p className="text-muted" style={{ fontSize: "0.8rem" }}>
              All equity delivery investments (NSE, BSE),
              <br />
              are absolutely free — ₹ 0 brokerage.
            </p>
          </div>

          {/* Intraday and F&O trades */}
          <div className="col-12 col-md-4 text-center">
            <img
              src="/media/images/intradayTrades.svg"
              alt="₹20"
              style={{ width: "250px" }}
            />
            <h5 className="mt-4 fw-semibold">Intraday and F&O trades</h5>
            <p className="text-muted" style={{ fontSize: "0.8rem" }}>
              Flat ₹ 20 or 0.03% (whichever is lower) per
              <br />
              executed order on intraday trades across
              <br />
              equity, currency, and commodity trades. Flat
              <br />
              ₹20 on all option trades.
            </p>
          </div>

          {/* Free direct MF */}
          <div className="col-12 col-md-4 text-center">
            <img
              src="/media/images/pricingMF.svg"
              alt="₹0"
              style={{ width: "250px" }}
            />
            <h5 className="mt-4 fw-semibold">Free direct MF</h5>
            <p className="text-muted" style={{ fontSize: "0.8rem" }}>
              All direct mutual fund investments are
              <br />
              absolutely free — ₹ 0 commissions & DP
              <br />
              charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
