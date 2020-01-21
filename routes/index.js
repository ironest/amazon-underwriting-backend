const express = require("express");
const router = express.Router();
const LinkController = require("./../controllers/link_controller")

const pageRoutes = require("./page_routes");
const sectionRoutes = require("./section_routes");
const linkRoutes = require("./link_routes");
const infoRoutes = require("./info_routes");

router.use("/pages", pageRoutes);
router.use("/sections", sectionRoutes);
router.use("/links", linkRoutes);
router.use("/info", infoRoutes);

module.exports = router;