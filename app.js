const express = require("express");
const methodOverride = require("method-override");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(morgan("combined"));

app.use(methodOverride('_method', { methods: ['POST', 'GET'] }))

app.use(require("./routes"));

app.use(express.static("public"));

app.use(require("./middleware/error_handler_middleware"));

module.exports = app;