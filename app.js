const express = require("express");
const methodOverride = require("method-override");
const passport = require("./config/passport");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(methodOverride('_method', { methods: ['POST', 'GET'] }))

app.use(require("./routes"));

app.use(require("./middleware/error_handler_middleware"));

module.exports = app;