const express = require("express");
const router = express.Router();
const NewsController = require("../controllers/news_controller");

router.get("/", NewsController.index);

router.post("/", NewsController.create);

router.delete("/:id", NewsController.destroy);

router.patch("/:id", NewsController.update);

router.put("/:id", NewsController.update);

router.get("/:id", NewsController.show);

module.exports = router;
