const PageModel = require('../database/models/page_model')

async function index(req, res) {
    //showed a list of all the resources

    let pageDocs;
    try {
      pageDocs = await PageModel.find();
    } catch (error) {
      return res.status(500).json({ error : error.message }); // Extracting all the pages from the DB
    }

    res.json( pageDocs );   // Returns the data

}

async function show(req, res) {
  // show a single resource

  let { id } = req.params     // Destructure the id off the params.

  let pageDoc;
  try {
    pageDoc = await PageModel.findById(id);
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  if (!pageDoc) { 
    return res.status(404).json({ error : "Page doesn't exist" });
  };

  res.json( pageDoc )            // render the 'book/show' and pass it the {book}

}

module.exports = {
    index,
    show
}