const PageModel = require("./../database/models/page_model");

function create(req, res) {
    let { pagename, doc } = req.body;
    let page = { pagename, doc };
  
    PageModel.create(page)
      .then(page => {
        return res.json(`${page.pagename} created`);
      })
      .catch(err => {
        return res.status(500).send(`Error: ${err}`);
      });
  }

  async function index (req, res) { 
    let pages = await PageModel.find()
    res.json(pages);
  }

  async function destroy (req, res) {
    console.log("Hey");
    let { id } = req.params
    await PageModel.findByIdAndRemove(id)
    res.json("deleted");
  }

  module.exports = {
    create,
    index,
    destroy
  }