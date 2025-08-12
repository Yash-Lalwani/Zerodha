import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-4 p-4 mt-5" style={{ lineHeight: "2.2rem" }}>
          <h1 style={{ fontSize: "2.3rem" }} className="mb-3 mt-4">
            {productName}
          </h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-5">
          <img src={imageURL} alt={productName}></img>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default RightSection;
