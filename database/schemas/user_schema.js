const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
    trim: true,
    // bcrypt: true
  }
});

// UserSchema.plugin(require("mongoose-bcrypt"));

module.exports = UserSchema;