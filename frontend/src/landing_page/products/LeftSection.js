import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-6 p-5">
          <img src={imageURL} alt={productName}></img>
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-4 mt-5" style={{ lineHeight: "2.2rem" }}>
          <h1 style={{ fontSize: "2.3rem" }} className="mb-3 mt-4">
            {productName}
          </h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "90px", textDecoration: "none" }}
            >
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Get it on Google Play"></img>
            </a>
            <a href={appStore}>
              <img
                src="media/images/appStoreBadge.svg"
                alt="Download on the App Store"
                style={{ marginLeft: "35px" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
