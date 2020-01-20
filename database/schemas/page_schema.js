const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SectionSchema = require("./section_schema");

const PageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sections: [SectionSchema]
});

module.exports = PageSchema;