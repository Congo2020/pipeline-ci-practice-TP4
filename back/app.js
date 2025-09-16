const express = require("express");
const cors = require("cors");
const app = express();

console.log("[BOOT] Starting Backend API...");
console.log(`[ENV] NODE_ENV=${process.env.NODE_ENV || "development"}`);

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.json({ message: "Backend API running!" });
});

app.get("/api/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    service: "Backend API" 
  });
});

// Puerto/Host
const PORT = Number(process.env.PORT) || 5000;
const HOST = process.env.HOST || "0.0.0.0"; // Bind to all interfaces to avoid IPv4/IPv6 quirks

const server = app.listen(PORT, HOST, () => {
  console.log(`[READY] Server running on http://${HOST}:${PORT}`);
});

server.on("error", (err) => {
  console.error("[ERROR] Failed to start server:", err && err.code ? err.code : err);
  if (err && err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Close the other process or change PORT.`);
  }
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.error("[ERROR] Unhandled Promise Rejection:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("[ERROR] Uncaught Exception:", err);
});