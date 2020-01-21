const express = require("express");
const router = express.Router();
const LinkController = require("./../controllers/link_controller")

router.get("/", LinkController.index)

router.post("/", LinkController.create)

router.get("/:id", LinkController.show)

router.delete("/:id", LinkController.destroy)

router.patch("/:id", LinkController.update)

router.put("/:id", LinkController.update)

module.exports = router;