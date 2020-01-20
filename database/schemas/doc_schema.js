const { Schema } = require("mongoose");
const LinkSchema = require("./link_schema")

// const Sections = ["Document Downloads", "Application Forms", "Claim Forms", "Useful links"]

const DocSchema = new Schema ({
        name: {
            type: String,
            required: true
        },
        links: [LinkSchema]
    })
     

module.exports = DocSchema