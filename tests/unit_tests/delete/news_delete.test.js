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

describe("News file delete", () => {
    it.only('Should delete a news file with ObjectId 5e3b8831d270a049d6cbe8aa', async () => {
        const res = await request(app)
        // the /news/5e3b8831d270a049d6cbe8aa refers to the id of a specific file in MongoDB
        // will not work unless specifying an objectId in MongoDB
        .delete("/news/5e3b8831d270a049d6cbe8aa")
        .set("Authorization", `Bearer ${token}`)
        console.log(res.body.name)
        expect(res.statusCode).toBe(303)
        
    })
})