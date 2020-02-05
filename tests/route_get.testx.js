require("./setup");
const request = require("supertest");
const app = require("./../app");

describe("Post endpoints", () => {
    it.only('should create a new post', async () => {
        const res = await request(app)
        .get("/news")
        expect(res.statusCode).toEqual(200)
        // expect(res.body).toHaveProperty('get')
    })
})