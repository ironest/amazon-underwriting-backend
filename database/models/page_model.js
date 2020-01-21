const mongoose = require('mongoose') // Require in mongoose
const PageSchema = require('./../schemas/page_schema') // Require in the Page Schema

const PageModel = mongoose.model('page', PageSchema) // Create a page model out of the Author Schema

module.exports = PageModel // Export the Page model
