const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const {
    createStartup
} = require("../controllers/startupController");


// CREATE STARTUP (protected)
router.post("/", protect, createStartup);


module.exports = router;