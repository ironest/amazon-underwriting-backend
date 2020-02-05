require("../../setup");
const request = require("supertest");
const app = require("../../../app");

describe("Connecting to news Endpoints", () => {
    it.only('connect to news api', async () => {
        const res = await request(app)
        .get("/news")
        expect(res.statusCode).toEqual(200)
        
    })
})