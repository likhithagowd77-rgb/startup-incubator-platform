const express = require("express");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const {
    registerUser,
    loginUser
} = require("../controllers/authController");


// REGISTER
router.post("/register", registerUser);


// LOGIN
router.post("/login", loginUser);


// PROTECTED ROUTE
router.get("/profile", protect, (req, res) => {
    res.json({
        message: "Profile Access Success"
    });
});


module.exports = router;