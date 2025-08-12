import React from "react";

function Hero() {
  return (
    <div className="container mt-5 p-2 border-bottom">
      <div className="row text-center mt-5 mb-5 ">
        <h1 style={{ fontSize: "3rem", lineHeight: "1.2" }}>
          Zerodha Products
        </h1>
        <p className="p-2" style={{ fontSize: "1.3rem" }}>
          Sleek, modern, and intuitive trading platforms
        </p>
        <p>
          Check out our{" "}
          <a href="/" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
