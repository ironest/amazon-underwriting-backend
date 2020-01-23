const NewsModel = require("./../database/models/news_model");

async function index (req, res) {
  let newsDocs
  try {
    newsDocs = await NewsModel.find();
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }
  res.json(newsDocs);
}

async function create (req, res) {

  let { period, title, paragraph, button, link } = req.body // Destructure infos off req.body

  try {
    await NewsModel.create({ period, title, paragraph, button, link }) // Creating the author
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  res.redirect(`/news`); // Redirect to /news/

}

async function destroy (req, res) {

  let { id } = req.params; // Destructure off the id off req.params

  let newsDoc;
  try {
    newsDoc = await NewsModel.findByIdAndDelete(id);
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  if (!newsDoc) { 
    return res.status(404).json({ error : "News doesn't exist" });
  };

  res.redirect('/news') // Redirect the user to the index page of all the news

}

async function show (req, res) {
  let { id } = req.params;
  let newsDoc;

  try {
    newsDoc = await NewsModel.findById( id );
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  if (!newsDoc) { 
    return res.status(404).json({ error : "News doesn't exist" });
  };

  res.json(newsDoc);
}

async function update(req, res) {
  //updates the resource

  let { id } = req.params  // Destructure the id off the params.
  let { period, title, paragraph, button, link } = req.body // Destructure infos off req.body

  let newsDoc;

  try {
    newsDoc = await NewsModel.findByIdAndUpdate(
      id, // what to match 
      { period, title, paragraph, button, link }, // new data
      { omitUndefined: true } // true = ignore undefined data
    )
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  if (!newsDoc) { 
    return res.status(404).json({ error : "News doesn't exist" });
  };

  res.redirect(`/news`); // Redirect to /news/

}

module.exports = {
  index,
  create,
  destroy,
  update,
  show,
}