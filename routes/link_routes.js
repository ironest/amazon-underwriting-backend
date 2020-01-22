const express = require("express");
const router = express.Router();
const LinkController = require("../controllers/link_controller");

// router.get("/", LinkController.index);

router.post("/", LinkController.create);

router.delete("/:id", LinkController.destroy);

router.patch("/:id", LinkController.update);

router.put("/:id", LinkController.update);

router.get("/:id", LinkController.show);

router.get("/:page/edit", LinkController.edit);

module.exports = router;

