const PageModel = require('../database/models/page_model')

async function index(req, res) {
    //showed a list of all the resources

    let pages = await PageModel.find()  // Extracting all the pages from the DB
    res.json( pages )                   // Returns the data

}

async function show(req, res) {
  // show a single resource

  let { id } = req.params     // Destructure the id off the params.
  let page = await PageModel.findById(id);
  res.json( page )            // render the 'book/show' and pass it the {book}

}

module.exports = {
    index,
    show
}