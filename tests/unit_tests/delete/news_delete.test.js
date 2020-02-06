require("../../setup");
const request = require("supertest");
const app = require("../../../app");

let token;
    beforeAll((done) => {
        request(app)
        .post('/login')
        .send({
            "email": "user@domain.com",
            "password": "password",
        })
        .end((err, response) => {
            token = response.body.token; // save the token!
            // console.log(token)
            done();
        });
    });

describe("info route", () => {
    it.only('connect to info endpoint', async () => {
        const res = await request(app)
        .delete("/news/5e3a3978bbe03a081bd70714")
        .set("Authorization", `Bearer ${token}`)
        console.log(res.body.name)
        expect(res.statusCode).toBe(200)
        
    })
})