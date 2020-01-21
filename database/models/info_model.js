const mongoose = require('mongoose') // Require in mongoose
const InfoSchema = require('./../schemas/info_schema') // Require in the Info Schema

const InfoModel = mongoose.model('info', InfoSchema) // Create a Info model out of the Author Schema

module.exports = InfoModel // Export the Page model
