var express = require("express");
var router = express.Router();
const { postSignup,getProfile } = require("../controllers/usersController");

// *POST Signup page
router.post("/signup", postSignup);

// * GET Profile page
router.get("/profile", getProfile);

module.exports = router;
