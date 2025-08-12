import React from "react";

export default function Brokerage() {
  return (
    <div className="container pt-5 mt-5 border-top">
      {/* Headings row - both centered in their columns */}
      <div className="row mb-4 text-center">
        <div className="col">
          <h5 className="text-primary mb-0">Brokerage calculator</h5>
        </div>
        <div className="col">
          <h5 className="text-primary mb-0">List of charges</h5>
        </div>
      </div>

      {/* Bullet list rows */}
      <div className="row mb-5">
        {/* Left Column */}
        <div className="col-12 col-md-6 offset-md-1 me-5">
          <ul className="text-muted small mb-5" style={{ lineHeight: "1.8" }}>
            <li className="mb-3">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="mb-3">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mb-3">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mb-3">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mb-3">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-3">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-4">
          <ul className="text-muted small mb-5" style={{ lineHeight: "1.8" }}>
            <li className="mb-3">Equity Delivery: ₹0 (free)</li>
            <li className="mb-3">
              Intraday Trades: ₹20 or 0.03% per executed order (whichever is
              lower)
            </li>
            <li className="mb-3">Equity Futures: ₹20 per executed order</li>
            <li className="mb-3">Equity Options: ₹20 per executed order</li>
            <li className="mb-3">
              Currency & Commodity: ₹20 or 0.03% per order
            </li>
            <li className="mb-3">
              Mutual Funds: ₹0 (no commissions or DP charges)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
