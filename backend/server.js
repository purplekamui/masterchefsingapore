const express = require("express");
const cors = require("cors");
require("dotenv").config();

const supabase = require("./config/supabase");

const voteRequestRoutes = require("./routes/voteRequestRoutes");
const contestantRoutes = require("./routes/contestants");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/test", (req, res) => {
  res.send("TEST ROUTE WORKING");
});

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "MasterChef SG Backend Running",
  });
});

// Routes
app.use("/api/contestants", contestantRoutes);
app.use("/api/votes", voteRequestRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});