require("../../setup");
const request = require("supertest");
const app = require("../../../app");

describe("info route", () => {
    it.only('connect to info endpoint', async () => {
        const res = await request(app)
        .get("/info")
        expect(res.statusCode).toEqual(200)
        // console.log(res.body.name)
        // expect(res.body.name).toBe("footer_info")
        
    })
})