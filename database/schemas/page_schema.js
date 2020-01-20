const { Schema } = require("mongoose");
const DocSchema = require("./doc_schema")

// const pages = ["Childcare", "Home based Business", "Personal accident"];

const PageSchema = new Schema ({
    page: {
        type: String,
        required: true
    },
    doc: [DocSchema]
    })
     

module.exports = PageSchema;