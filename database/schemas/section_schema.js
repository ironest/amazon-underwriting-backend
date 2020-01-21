const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LinkSchema = require("./link_schema");

const SectionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  links: [LinkSchema]
});

module.exports = SectionSchema;