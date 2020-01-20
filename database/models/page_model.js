const mongoose = require("mongoose");
const PageSchema = require("../schemas/page_schema");

const PageModel = mongoose.model("link", PageSchema);

module.exports = PageModel;