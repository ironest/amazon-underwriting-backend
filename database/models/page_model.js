const mongoose = require("mongoose");
const PageSchema = require("../schemas/page_schema");

const PageModel = mongoose.model("page", PageSchema);

module.exports = PageModel;