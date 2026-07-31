const express = require("express");
const cors = require("cors");
require("dotenv").config();

const supabase = require("./config/supabase");
const voteRequestRoutes = require("./routes/voteRequestRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Supabase Connection
async function testSupabase() {
    const { error } = await supabase
        .from("vote_requests")
        .select("*")
        .limit(1);

    if (error) {
        console.log("❌ Supabase Error:", error.message);
    } else {
        console.log("✅ Supabase Connected");
    }
}

testSupabase();

// Routes
app.use("/api/votes", voteRequestRoutes);

// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Master Chef Singapore Backend is Running 🚀"
    });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});