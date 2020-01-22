const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require("./routes"));

app.use(require("./middleware/error_handler_middleware"));

module.exports = app;