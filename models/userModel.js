const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  bio: String,
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogs",
    },
  ],
  profile: {
    type: String,
    default:"https://i.pinimg.com/564x/11/e7/5c/11e75c046476eb24c2c7c99f146b6c29.jpg",

  },
});
userSchema.plugin(plm);
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
