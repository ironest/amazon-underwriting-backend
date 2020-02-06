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

    // name, id: sectionId
describe("Link delete", () => {
    it.only('Should delete a links file with ObjectId of 5e39f77038e66d4a3d22afdb', async () => {
        const res = await request(app)
        console.log(res.body.name)
        .delete("/links/5e39f77038e66d4a3d22afdb")
        .set("Authorization", `Bearer ${token}`)
        expect(res.statusCode).toBe(200)
        
    })
})