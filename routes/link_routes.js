const express = require("express");
const router = express.Router();
const LinkController = require("../controllers/link_controller");

router.get("/", LinkController.index);

router.post("/", LinkController.create);

router.delete("/:page", LinkController.destroy);

router.patch("/:page", LinkController.update);

router.put("/:page", LinkController.update);

router.get("/:page", LinkController.show);

module.exports = router;
