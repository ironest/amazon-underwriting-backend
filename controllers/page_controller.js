const PageModel = require("./../database/models/page_model");

function create(req, res) {
    let { pagename, doc } = req.body;
    let page = { pagename, doc };
  
    PageModel.create(page)
      .then(page => {
        return res.render("success");
      })
      .catch(err => {
        return res.status(500).send(`Error: ${err}`);
      });
  }

  // function index(req, res) {
  //   // res.render("/", PageModel.find())
  //   return res.json(req.page)
  // }

  async function index (req, res) { 
    let pages = await PageModel.find()
    res.json(pages)
  }

  module.exports = {
    create,
    index
  }