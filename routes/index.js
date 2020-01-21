const express = require("express");
const router = express.Router();
const LinkController = require("./../controllers/link_controller")

router.get("/", LinkController.index)

router.post("/", LinkController.create)

router.delete("/:id", LinkController.destroy)

module.exports = router;