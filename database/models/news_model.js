const mongoose = require('mongoose') // Require in mongoose
const NewsSchema = require('./../schemas/news_schema') // Require in the News Schema

const NewsModel = mongoose.model('news', NewsSchema) // Create a Info model out of the News Schema

module.exports = NewsModel // Export the News model
