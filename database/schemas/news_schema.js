const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  period: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  },
  button: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = NewsSchema;


