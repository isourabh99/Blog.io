var Imagekit = require("imagekit");
var imagekit = new Imagekit({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
  urlEndpoint: process.env.URL_ENDPOINT,
});

module.exports = imagekit;
