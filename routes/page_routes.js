const express = require("express");
const router = express.Router();
const PageController = require("../controllers/page_controller");

/*
    The project provides N fixed pages.
    The endpoints availables are:
    /pages          -> returns a list of pages
    /pages/:id      -> returns data for the specified :page
*/

router.get("/", PageController.index);
router.get("/:id", PageController.show);

module.exports = router;
