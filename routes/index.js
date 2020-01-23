const express = require("express");
const router = express.Router();

const pageRoutes = require("./page_routes");
const sectionRoutes = require("./section_routes");
const linkRoutes = require("./link_routes");
const infoRoutes = require("./info_routes");
const newsRoutes = require("./news_routes");

router.use("/pages", pageRoutes);
router.use("/sections", sectionRoutes);
router.use("/links", linkRoutes);
router.use("/info", infoRoutes);
router.use("/news", newsRoutes);

module.exports = router;