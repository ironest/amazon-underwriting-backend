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

// let linkId;
    // async function() => {
    //     it("should return a link id", async () => {
    //         const res = await request(app)
    //         console.log(res.body[0])
    //         .get("/pages")
    //         .then(
    //             linkId = res.body[0].sections[0].links[0]._id
    //         )
    //     })
    // })
    let LinkId;
    async function getInfo() {
        try {
          response = await axios.get("/pages")
          console.log(LinkId)
          return LinkId = response.body[0].sections[0].links[0]._id
        } catch (e) {
          throw new Error("Oops. Something wrong happened")
        }
      }

    describe("Link delete", () => {
        it.only('Should delete Group Personal Accident and/or Sickness file', async () => {
            const res = await request(app)
        // console.log(LinkId)
        .delete(`/links/${LinkId}`)
        .set("Authorization", `Bearer ${token}`)
        expect(res.statusCode).toBe(303)
        
    })
})