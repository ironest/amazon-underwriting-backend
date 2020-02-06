require("../setup");
const request = require('supertest');
const app = require('../../app'); // the express server

    /*
      declare the token variable in a scope accessible
      by the entire test suite
    */
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

    describe("Post endpoints", () => {
        it('should create a new post', async () => {
            const res = await request(app)
            // return request(app)
            .post("/news")
            .set("Authorization", `Bearer ${token}`)
            .send({
                "period": "983983",
                "title": "test1",
                "paragraph": "test paragraph",
                "button": "Follow up",
                "link": "https://au.yahoo.com/",
                "image": "https://i.picsum.photos/id/1033/1000/400.jpg?blur=5"
            })
            expect(res.statusCode).toEqual(302)
        //     .then((response) => {
        // })
        //         console.log(res.body)
                // expect(res.body).toHaveProperty('post')
        })
    })