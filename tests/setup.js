require("dotenv").config();
const connect = require("./../database/connect_test");

module.exports = (() => {
    let mongoose;

    beforeAll(async () => {
        mongoose = await connect(process.env.DB_HOST_TEST);
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })
})()