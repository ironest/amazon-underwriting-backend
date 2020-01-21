const express = require("express");
const router = express.Router();
const SectionController = require("../controllers/section_controller");

router.get("/", SectionController.index);

router.post("/", SectionController.create);

router.get("/new", SectionController.make);

router.delete("/:id", SectionController.destroy);

router.patch("/:id", SectionController.update);

router.put("/:id", SectionController.update);

router.get("/:id", SectionController.show);

router.get("/:id/edit", SectionController.edit);

module.exports = router;
