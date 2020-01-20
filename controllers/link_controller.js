const LinkModel = require("./../database/models/link_model");

function create(req, res) {
    let { nameofdoc, url } = req.body;
    let link = { nameofdoc, url };
  
    LinkModel.create(link)
      .then(link => {
        return res.render("success");
      })
      .catch(err => {
        return res.status(500).send(`Error: ${err}`);
      });
  }

  // function index(req, res) {
  //   res.render("/")
  // }

  module.exports = {
    create,
    index
  }

  