const express = require("express");
const passport = require("passport");
const router = express.Router();
const LinkController = require("../controllers/link_controller");

router.post("/", passport.authenticate('jwt', {session: false}), LinkController.create);

router.delete("/:id", passport.authenticate('jwt', {session: false}), LinkController.destroy);

router.patch("/:id", passport.authenticate('jwt', {session: false}), LinkController.update);

router.put("/:id", passport.authenticate('jwt', {session: false}), LinkController.update);

router.get("/:id", LinkController.show);

module.exports = router;

