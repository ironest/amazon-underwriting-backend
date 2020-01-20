const express = require("express");
const router = express.Router();
const LinkController = require("../controllers/link_controller");

router.get("/", LinkController.index);

router.post("/", LinkController.create);

router.get("/new", LinkController.make);

router.delete("/:page", LinkController.destroy);

router.patch("/:page", LinkController.update);

router.put("/:page", LinkController.update);

router.get("/:page", LinkController.show);

router.get("/:page/edit", LinkController.edit);

module.exports = router;
