const express = require("express");
const router = express.Router();
const { celebrate, Joi, Segments } = require("celebrate");
const passport = require("passport");

const AuthController = require("./../controllers/auth_controller");

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

/* Authentication Logic through passport-local */
router.post("/login",
  celebrate({
    [Segments.BODY]: {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
  }),
  passport.authenticate("local", {
    failureRedirect: "/login",
    session: false
  }),
  AuthController.loginCreate
);

router.get("/logout", AuthController.logout);

module.exports = router;