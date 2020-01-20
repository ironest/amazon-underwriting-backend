const express = require("express");
const router = express.Router();
const linkRoutes = require("./link_routes");
const infoRoutes = require("./info_routes");

router.use("/links", linkRoutes);
router.use("/info", infoRoutes);

module.exports = router;