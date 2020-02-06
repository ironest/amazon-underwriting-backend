require("../../setup");
const request = require('supertest');
const app = require("../../../app"); // the express server
    describe("Pages test", () => {
        it.only("should connect to links api", async () => {
            const res = await request(app)
        .get("/pages")
        console.log(res.body[0].sections[0].links[0]._id)
        
        expect(res.statusCode).toEqual(200)
        console.log(res.body)
        // expect(res.body).toBe()
        expect(res.body.length).toEqual(3)
    })  
})