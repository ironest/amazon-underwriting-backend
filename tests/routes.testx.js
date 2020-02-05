require("./setup");
const request = require("supertest");
const app = require("./../app");

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