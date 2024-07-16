const userModel = require("../models/userModel");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const imagekit = require("../utils/imagekit");
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

exports.getProfile = async (req, res, next) => {
  res.render("profile", {
    title: "Profile",
    user: req.user,
  });
};

exports.postUploadAvatar = async (req, res, next) => {
  try {
    const { fileId, url, thumbnailUrl } = await imagekit.upload({
      file: req.files.DP.data,
      fileName: req.files.DP.name,
    });
    if (req.user.DP.fileId) {
      await imagekit.deleteFile(req.user.DP.fileId);
    }
    req.user.DP = { fileId, url, thumbnailUrl };
    await req.user.save();
    // console.log(req.user);
    // console.log(req.files);
    res.redirect("/users/profile");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
