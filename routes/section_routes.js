const express = require("express");
const router = express.Router();
const SectionController = require("../controllers/section_controller");

router.patch("/:id", passport.authenticate('jwt', {session: false}), SectionController.update);

router.put("/:id", passport.authenticate('jwt', {session: false}), SectionController.update);

router.get("/:id", SectionController.show);

module.exports = router;
