const express = require("express");
const router = express.Router();
const InfoController = require("../controllers/info_controller");

router.get("/", InfoController.index);

router.patch("/", InfoController.update);

router.put("/", InfoController.update);

module.exports = router;
