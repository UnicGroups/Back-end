const express = require("express");
const cors = require("cors");

const groupRoutes = require("./routes/groupRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/groups", groupRoutes);

// Root route
app.get("/", (req, res) => {
    res.json({ message: "Study Group Finder API is running" });
});

module.exports = app;