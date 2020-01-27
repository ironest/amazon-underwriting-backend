const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/news_controller");

router.get("/", NewsController.index);

router.post("/", passport.authenticate('jwt', {session: false}), NewsController.create);

router.delete("/:id", passport.authenticate('jwt', {session: false}), NewsController.destroy);

router.patch("/:id", passport.authenticate('jwt', {session: false}), NewsController.update);

router.put("/:id", passport.authenticate('jwt', {session: false}), NewsController.update);

router.get("/:id", NewsController.show);

module.exports = router;
