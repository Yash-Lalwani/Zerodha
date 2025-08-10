import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

// Capture token from query params and store for API calls
const url = new URL(window.location.href);
const tokenFromQuery = url.searchParams.get("token");
if (tokenFromQuery) {
  localStorage.setItem("token", tokenFromQuery);
  // Optionally clean URL
  window.history.replaceState({}, document.title, "/");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
