import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const context = useContext(GeneralContext);

  const handleBuyClick = async () => {
    const token = localStorage.getItem("token");
    try {
      setSubmitting(true);
      setSubmitError("");
      const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3002";
      await axios.post(
        `${baseUrl}/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode,
        },
        { headers: token ? { Authorization: `Bearer ${token}` } : {} }
      );
      // success: close
      context.closeBuyWindow();
    } catch (e) {
      setSubmitError(
        e?.response?.data?.error || e?.message || "Failed to place order"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    context.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          {submitError && (
            <span className="text-danger me-3">{submitError}</span>
          )}
          <button
            type="button"
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={submitting}
          >
            {submitting ? "Placing..." : "Buy"}
          </button>
          <button
            type="button"
            className="btn btn-grey ms-2"
            onClick={handleCancelClick}
            disabled={submitting}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
