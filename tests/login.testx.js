require("./setup");
const request = require("supertest");
const app = require("../app");

describe("login to user", () => {
    it('should log in as admin', async () => {
        const res = await request(app)
        .post("http://localhost:3000/login")
        .send({
            email: "user@domain.com",
            password: "password"
    })
        expect(res.statusCode).toEqual(201)
        // expect(res.body).toHaveProperty('post')
    })
})