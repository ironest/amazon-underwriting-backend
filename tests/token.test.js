require("./setup");
const request = require('supertest');
const app = require('../app'); // the express server

    /*
      declare the token variable in a scope accessible
      by the entire test suite
    */
    let token;
    beforeAll((done) => {
        request(app)
        .post('/login')
        .send({
            username: "user@domain.com",
            password: "password",
        })
        .end((err, response) => {
            token = response.body.token; // save the token!
            done();
        });
    });
    console.log(token)

    describe("Post endpoints", () => {
        it.only('should create a new post', async () => {
            const res = await request(app)
            .post("http://localhost:3000/news")
            .send({
                period: "123456",
                title: "test?",
                paragraph: "test paragraph",
                button: "Follow up",
                link: "https://au.yahoo.com/",
                image: "https://i.picsum.photos/id/1033/1000/400.jpg?blur=5"
            })
                expect(res.statusCode).toEqual(201)
                expect(res.body).toHaveProperty('post')
        })
    })