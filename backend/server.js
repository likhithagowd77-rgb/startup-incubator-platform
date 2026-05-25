const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

// connect MongoDB
connectDB();

const app = express();

// middleware
app.use(express.json());

// AUTH ROUTES
app.use("/api/auth", require("./routes/authRoutes"));

// STARTUP ROUTES
app.use("/api/startups", require("./routes/startupRoutes"));

// test route
app.get("/", (req, res) => {
    res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});