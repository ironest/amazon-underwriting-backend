const mongoose = require("mongoose");
const LinkSchema = require("../schemas/link_schema");

const LinkModel = mongoose.model("link", LinkSchema);

module.exports = LinkModel;