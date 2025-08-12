import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5 mt-4">
      <div className="row text-center">
        {/* we can just get the image like this normal html because it is in the public folder, if it is in src folder then we have to import it first using import statement and then use it like an object here using the curly braces fomat of react. */}
        <h1 className="mt-5 mb-3">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-4"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
