const PageModel = require("./../database/models/page_model");
const {getMetaDataSubDocument} = require("../utility/pageDoc");

async function create(req, res) {
    let { name, url, id: sectionId } = req.body;
    let link = { name, url };

    let pageDoc;
    try {
      pageDoc = await PageModel.findOne({"sections._id": sectionId });
    } catch (error) {
      return res.status(500).send(`Error: ${error}`);
    }

    if (!pageDoc) { 
      return res.status(404).send("Section not found");
    };

    // let section = getSubDocument([pageDoc], sectionId);
    let {parentDoc: section} = getMetaDataSubDocument([pageDoc], sectionId);

    let linkDoc;
    try {
      section.links.push(link);
      linkDoc = section.links[section.links.length - 1];
      pageDoc.save();
    } catch (error) {
      return res.status(500).send(`Error: ${error}`);
    }

    res.json(linkDoc)

}

async function show (req, res) {
  let { id } = req.params;
  let pageDoc;

  try {
    pageDoc = await PageModel.findOne({"sections.links._id": id });
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }

  if (!pageDoc) { 
    return res.status(404).send("Link not found");
  };

  // let linkDoc = getSubDocument([pageDoc], id);

  let {subDoc: linkDoc} = getMetaDataSubDocument([pageDoc], id);

  res.json(linkDoc)
}

 async function destroy (req, res) {

  let { id } = req.params;

  let pageDoc;
  try {
    pageDoc = await PageModel.findOne({"sections.links._id": id });
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }

  if (!pageDoc) { 
    return res.status(404).send("Link not found");
  };

  let linkMetaData = getMetaDataSubDocument([pageDoc], id);

  try {
    let { parentDoc, subDocIdx } = linkMetaData;
    linkDoc = parentDoc.links.splice(subDocIdx, 1);
    pageDoc.save();
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }

  res.json(...linkDoc)

}

async function update(req, res) {
  let { id } = req.params;
  let { name, url } = req.body;
  let link = { name, url };

  let pageDoc;
  try {
    pageDoc = await PageModel.findOne({"sections.links._id": id });
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }

  if (!pageDoc) { 
    return res.status(404).send("Link not found");
  };

  let linkDoc = getSubDocument([pageDoc], id);

  try {
    linkDoc.name = link.name;
    linkDoc.url = link.url;
    pageDoc.save();
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }

  res.json(linkDoc)

}

module.exports = {
    create,
    show,
    destroy,
    update,
}