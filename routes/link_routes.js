const express = require("express");
const passport = require("passport");
const multer = require('multer');
const router = express.Router();
const LinkController = require("../controllers/link_controller");

router.post("/",
            passport.authenticate('jwt', {session: false}),
            multer({ dest: 'temp/', limits: { fieldSize: 8 * 1024 * 1024, fileSize: 8 * 1024 * 1024 } }).single('file'),
            LinkController.create);

router.delete("/:id", passport.authenticate('jwt', {session: false}), LinkController.destroy);

router.patch("/:id", passport.authenticate('jwt', {session: false}), LinkController.update);

router.put("/:id", passport.authenticate('jwt', {session: false}), LinkController.update);

router.get("/:id", LinkController.show);

module.exports = router;

