import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 pb-1" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="/" aria-label="Track tickets">Track Tickets</a>
      </div>

      <div className="row p-3 m-3">
        {/* Left Column */}
        <div className="col-6 p-3 pt-1">
          <h1 className="fs-3 mb-5">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            className="mb-4" // Adds space below the input box
            placeholder="Eg. how do I activate F&O"
          />
          <br />
          <a href="/" className="me-3">
            Track account opening
          </a>
          <a href="/" className="me-3 ">
            Track segment activation
          </a>
          <a href="/">Intraday margins</a>
          <br />
          <a href="/" style={{ lineHeight: "3rem" }}>
            Kite user manual
          </a>
        </div>

        {/* Right Column */}
        <div className="col-6 p-5">
          <h1 className="fs-3" style={{ marginLeft: "90px" }}>
            Featured
          </h1>
          <ol>
            <li style={{ marginLeft: "100px", lineHeight: "4rem" }}>
              <a href="/">Current Takeovers and Delisting – January 2024</a>
            </li>
            <li style={{ marginLeft: "100px" }}>
              <a href="/">Latest Intraday leverages – MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
