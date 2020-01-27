const UserModel = require("./../database/models/user_model");
const jwt = require("jsonwebtoken");

function loginCreate(req, res) {
  const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);
  // res.cookie("jwt", token);
  res.json(token);
}

function logout(req, res) {
  req.logout();
  res.cookie("jwt", null, { maxAge: -1 });
  res.json({ error : "Logged out" });
}

module.exports = {
  loginCreate,
  logout
}
