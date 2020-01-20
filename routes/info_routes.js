const express = require("express");
const router = express.Router();
const LinkController = require("../controllers/info_controller");

router.get("/", LinkController.index);

/*
    Not sure how safe is to be provide below endpoints
    as there MUST be one and only one entry AT ANY TIME
*/

// router.post("/", LinkController.create);
// router.get("/new", LinkController.make);
// router.delete("/", LinkController.destroy);

router.patch("/", LinkController.update);

router.put("/", LinkController.update);

router.get("/edit", LinkController.edit);

module.exports = router;
