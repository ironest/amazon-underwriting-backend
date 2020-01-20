const { Schema } = require("mongoose");
// const LinkSchema = require("./link_schema")

const DocSchema = new Schema ({
        name: {
            type: String,
            required: true
        },
        links: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "link"
        }
    })
     

module.exports = DocSchema;