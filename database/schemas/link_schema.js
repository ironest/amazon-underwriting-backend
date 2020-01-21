const { Schema } = require("mongoose");

const LinkSchema = new Schema ({
        page: {
            type: String,
            // required: true
        },
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    })
     

module.exports = LinkSchema;