const userModel = require("../models/userModel");
const passport = require("passport");
const LocalStrategy = require("passport-local");
passport.use(new LocalStrategy(userModel.authenticate()));

exports.postSignup = async function (req, res, next) {
  try {
    const { username, profilepic, email, password } = req.body;
    const nonEncryptedData = { username, profilepic, email };
    const EncryptedData = password;
    await userModel
      .register(nonEncryptedData, EncryptedData)
      .then(() => {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/users/profile");
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (error) {
    res.send(error.message);
    console.log(error);
  }
};

exports.getProfile=async(req,res,next)=>{

  res.render("profile",{
    title:"Profile",user:req.user
  })
}


// TODO create login,logout 