const express = require("express");
const router = express.Router();
const SectionController = require("../controllers/section_controller");

router.patch("/:id", SectionController.update);

router.put("/:id", SectionController.update);

router.get("/:id", SectionController.show);

module.exports = router;
