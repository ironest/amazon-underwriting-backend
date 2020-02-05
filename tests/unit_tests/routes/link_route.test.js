require("../../setup");
const request = require('supertest');
const app = require("../../../app"); // the express server
    describe("Hitting links endpoint", () => {
        it.only("should return Individual Personal Accident and/or Sickness object", async () => {
            const res = await request(app)
        .get("/links/5e39f77038e66d4a3d22afda")
   
        expect(res.statusCode).toEqual(200)
        expect(res.body.name).toEqual("Individual Personal Accident and/or Sickness")
    })  
})