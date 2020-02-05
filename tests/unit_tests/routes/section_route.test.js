require("../../setup");
const request = require('supertest');
const app = require("../../../app"); // the express server
    describe("Linkstest", () => {
        it.only("should connect to links api", async () => {
            const res = await request(app)
        .get("/sections/5e39f77038e66d4a3d22afc6")
   
        expect(res.statusCode).toEqual(200)
        expect(res.body.name).toEqual("Document Downloads")
    })  
})

