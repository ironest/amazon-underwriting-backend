const express = require("express");
const passport = require("passport");
const router = express.Router();
const InfoController = require("../controllers/info_controller");

router.get("/", InfoController.index);

router.patch("/", passport.authenticate('jwt', {session: false}), InfoController.update);

router.put("/", passport.authenticate('jwt', {session: false}), InfoController.update);

module.exports = router;
