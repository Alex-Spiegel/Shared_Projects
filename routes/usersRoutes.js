const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const { protect } = require("../middlewares/auth");

//==================================================
// POST /users/signup - sign up a new user
//==================================================
router.post("/signup", usersController.signUpUser);

//==================================================
// POST /users/login - log in a user
//==================================================
router.post("/login", usersController.loginUser);

//==================================================
// GET /users/profile - got to user's profile
//==================================================
router.get("/profile", protect, usersController.userProfile);

module.exports = router;
