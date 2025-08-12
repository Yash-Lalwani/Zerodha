import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* means this will choose the half screen automatically */}
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="Largest broker illustration"></img>
        </div>
        <div className=" col-6 p-5 mt-4">
          <h1>Largest Broker in India</h1>
          <p className="mb-5">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds and Govt.</p>
                </li>
              </ul>
            </div>
            <img
              src="media/images/pressLogos.png"
              alt="Press logos"
              style={{ width: "90%" }}
              className="mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
