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
  DP: {
    fileId: String,
    url: {
      type: String,
      default: "https://ik.imagekit.io/lmh4shp8d/1?updatedAt=1720341746483",
    },
    thumbnailUrl: String,
  },
});
userSchema.plugin(plm);
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
