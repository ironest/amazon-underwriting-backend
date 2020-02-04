const express = require("express");
const passport = require("passport");
const router = express.Router();
const multer = require('multer');
const NewsController = require("../controllers/news_controller");

router.get("/", NewsController.index);

router.post("/",
            passport.authenticate('jwt', {session: false}),
            multer({ dest: 'temp/', limits: { fieldSize: 8 * 1024 * 1024, fileSize: 8 * 1024 * 1024 } }).single('file'),
            NewsController.create);

router.delete("/:id", passport.authenticate('jwt', {session: false}), NewsController.destroy);

router.patch("/:id", passport.authenticate('jwt', {session: false}), NewsController.update);

router.put("/:id", passport.authenticate('jwt', {session: false}), NewsController.update);

router.get("/:id", NewsController.show);

module.exports = router;
