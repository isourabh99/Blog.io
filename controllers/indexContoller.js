exports.gethome = function (req, res, next) {
  res.render("index", { title: "Home" });
};

exports.getLogin = function (req, res, next) {
  res.render("login", { title: "Login" });
};

exports.getSignup = function (req, res, next) {
  res.render("signup", { title: "Sign Up" });
};
