const PageModel = require("./../database/models/page_model");
const {getMetaDataSubDocument} = require("../utility/pageDoc");

async function show (req, res) {
  let { id } = req.params;
  let pageDoc;

  try {
    pageDoc = await PageModel.findOne({"sections._id": id });
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  if (!pageDoc) { 
    return res.status(404).json({ error : "Section doesn't exist" });
  };

  let {subDoc: sectionDoc} = getMetaDataSubDocument([pageDoc], id);

  res.json(sectionDoc)
}

async function update(req, res) {
  //updates the resource

  let { id } = req.params  // Destructure the id off the params.
  let { name } = req.body // Destructure infos off req.body

  let pageDoc;

  try {
    pageDoc = await PageModel.findOne({"sections._id": id });
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  if (!pageDoc) { 
    return res.status(404).json({ error : "Section doesn't exist" });
  };

  // let linkDoc = getSubDocument([pageDoc], id);
  let {subDoc: sectionDoc} = getMetaDataSubDocument([pageDoc], id);

  try {
    sectionDoc.name = name;
    await pageDoc.save();
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  // Redirecting to /pages to allow the front-end to refetch the entire pages data
  res.redirect(`/pages`);

}

module.exports = {
    show,
    update,
}