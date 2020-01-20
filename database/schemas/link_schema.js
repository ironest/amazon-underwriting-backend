const { Schema } = require("mongoose");

const LinkSchema = new Schema ({
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    })
     

module.exports = LinkSchema;