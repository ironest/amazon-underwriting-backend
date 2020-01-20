const { Schema } = require("mongoose");
const SectionSchema = require("./section_schema")

// const pages = ["Childcare", "Home based Business", "Personal accident"];

const PageSchema = new Schema ({
    pagename: {
        type: String,
        required: true
    },
    section: [SectionSchema]
    })
     

module.exports = PageSchema;