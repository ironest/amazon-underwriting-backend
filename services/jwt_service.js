const JWT = require("jsonwebtoken");

function generateToken(user) {
    const token = JWT.sign(
        {}, // payload is empty as the _id is going to be passed as option/subject
        process.env.JWT_SECRET,
        {
            subject: user._id.toString()
        }
    );

    return token;
}

module.exports = {
    generateToken
}