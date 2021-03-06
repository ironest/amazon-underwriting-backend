const PageModel = require("./../database/models/page_model");
const {getMetaDataSubDocument} = require("../utility/pageDoc");
const S3Service = require("./../services/file_upload");

async function create(req, res) {

    const url = await S3Service.upload(req, res, "pdf");

    let { name, id: sectionId } = req.body;
    let link = { name , url};

    let pageDoc;
    try {
      pageDoc = await PageModel.findOne({"sections._id": sectionId });

    } catch (error) {
      return res.status(500).json({ error : error.message });
    }

    if (!pageDoc) { 
      return res.status(404).json({ error : "Section doesn't exist" });
    };

    let {subDoc: section} = getMetaDataSubDocument([pageDoc], sectionId);

    try {
      section.links.push(link);
      await pageDoc.save();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error : error.message });
    }

    // Redirecting to /pages to allow the front-end to refetch the entire pages data
    res.redirect(`/pages`);

}

async function show (req, res) {
  let { id } = req.params;
  let pageDoc;

  try {
    pageDoc = await PageModel.findOne({"sections.links._id": id });
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  if (!pageDoc) { 
    return res.status(404).json({ error : "Link doesn't exist" });
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
    return res.status(500).json({ error : error.message });
  }

  if (!pageDoc) { 
    return res.status(404).json({ error : "Link doesn't exist" });
  };

  let linkMetaData = getMetaDataSubDocument([pageDoc], id);

  try {
    let { parentDoc, subDocIdx } = linkMetaData;
    linkDoc = parentDoc.links.splice(subDocIdx, 1);
    await pageDoc.save();
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  // Redirecting to /pages to allow the front-end to refetch the entire pages data
  res.redirect(303, `/pages`);

}

async function update(req, res) {
  let { id } = req.params;
  let { name } = req.body;
  let link = { name };

  let pageDoc;
  try {
    pageDoc = await PageModel.findOne({"sections.links._id": id });
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  if (!pageDoc) { 
    return res.status(404).json({ error : "Link doesn't exist" });
  };

  // let linkDoc = getSubDocument([pageDoc], id);
  let {subDoc: linkDoc} = getMetaDataSubDocument([pageDoc], id);

  try {
    linkDoc.name = link.name;
    // linkDoc.url = link.url ? link.url : linkDoc.url;
    await pageDoc.save();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error : error.message });
  }

  // Redirecting to /pages to allow the front-end to refetch the entire pages data
  res.redirect(303, `/pages`);

}

module.exports = {
    create,
    show,
    destroy,
    update,
}