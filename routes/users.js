var express = require("express");
var router = express.Router();
const { postSignup,getProfile } = require("../controllers/usersController");
const passport = require("passport");
const {isLoggedIn}=require("../middleware/auth")

// *POST Signup page
router.post("/signup", postSignup);

// * GET Profile page
router.get("/profile", isLoggedIn,getProfile);

// * POST Login route
router.post("/login",passport.authenticate("local",{
    successRedirect:"/users/profile",
    failureRedirect:"/login"
}),(req,res,next)=>{})

// *Get Logout route
router.get("/logout",isLoggedIn,(req,res,next)=>{
req.logOut(()=>{
    res.redirect("/")
})
})

module.exports = router;
