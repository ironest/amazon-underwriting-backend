require("../setup");
const request = require('supertest');
const app = require('./../../app'); // the express server

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
            console.log(token)
            done();
        });
    });

    test("Post endpoints", () => {
        it.only('should create a new post', async () => {
            // const res = await request(app)
            return request(app)
            .get("/news")
            .set("Authorization", `token ${token}`)
            .send({
            period: "983983",
            title: "test?",
            paragraph: "test paragraph",
            button: "Follow up",
            link: "https://au.yahoo.com/",
            image: "https://i.picsum.photos/id/1033/1000/400.jpg?blur=5"
        })
        //     .then((response) => {
        // })
                console.log(res.body)
                // expect(res.statusCode).toEqual(200)
                // expect(res.body).toHaveProperty('post')
        })
    })