import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const apiBase = process.env.REACT_APP_API_URL || "http://localhost:3002";
      const dashboardBase = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3000";
      const res = await fetch(`${apiBase}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");
      // Hand off token to dashboard (different origin) via query param
      window.location.href = `${dashboardBase}/?token=${encodeURIComponent(data.token)}`;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-5">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <button className="btn btn-primary" disabled={loading} type="submit">
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
