require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

const app = express();

// Configurable CORS for deployment
const allowedOrigins = (process.env.CORS_ORIGINS || "http://localhost:3000,http://localhost:3001")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);
app.use(bodyParser.json());

// Models
const { UserModel } = require("./model/UserModel");

// Auth middleware
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.substring("Bearer ".length)
    : null;
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.userId = payload.userId;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// Auth routes
app.post("/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Missing fields" });
    }
    const existing = await UserModel.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: "Email already in use" });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await UserModel.create({ name, email, passwordHash });
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (e) {
    res.status(500).json({ error: "Signup failed" });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (e) {
    res.status(500).json({ error: "Login failed" });
  }
});

app.get("/auth/me", authMiddleware, async (req, res) => {
  const user = await UserModel.findById(req.userId).select("name email");
  res.json({ user });
});

// Health check
app.get("/healthz", (req, res) => {
  res.json({ ok: true });
});

app.get("/allHoldings", authMiddleware, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", authMiddleware, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ error: "Missing fields" });
    }
    const quantityNumber = Number(qty);
    const priceNumber = Number(price);
    if (!Number.isFinite(quantityNumber) || quantityNumber <= 0) {
      return res.status(400).json({ error: "Quantity must be a positive number" });
    }
    if (!Number.isFinite(priceNumber) || priceNumber <= 0) {
      return res.status(400).json({ error: "Price must be a positive number" });
    }
    const newOrder = new OrdersModel({
      name,
      qty: quantityNumber,
      price: priceNumber,
      mode,
    });
    await newOrder.save();
    return res.json({ message: "Order saved", orderId: newOrder._id });
  } catch (err) {
    return res.status(500).json({ error: "Failed to save order" });
  }
});

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});
