const JWTService = require("./../services/jwt_service");

function loginCreate(req, res) {
  const token = JWTService.generateToken(user);
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
