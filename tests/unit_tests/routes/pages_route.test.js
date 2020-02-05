require("../../setup");
const request = require('supertest');
const app = require("../../../app"); // the express server
    describe("Linkstest", () => {
        it.only("should connect to links api", async () => {
            const res = await request(app)
        .get("/pages")
   
        expect(res.statusCode).toEqual(200)
        expect(res.body.name).toEqual("Individual Personal Accident and/or Sickness")
    })  
})