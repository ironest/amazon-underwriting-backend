const express = require("express");
const router = express.Router();
const PageController = require("./../controllers/page_controller")

router.get("/", PageController.index)

router.post("/", PageController.create)

module.exports = router;