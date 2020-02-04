const InfoModel = require('../database/models/info_model')

async function index(req, res) {
  //showed a list of all the resources

  let infoDoc;
  try {
    infoDoc = await InfoModel.findOne();  // Extracting all the info from the DB
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  if (!infoDoc) { 
    return res.status(404).json({ error : "Information doesn't exist" });
  };

  res.json( infoDoc );  // Returns the data

}

async function update(req, res) {
  //updates the resource

  let { footer_info, childcare_info, hbb_info, accident_info, contact_info } = req.body // Destructure infos off req.body

  let infoDoc;

  try {
    infoDoc = await InfoModel.updateOne(
      {}, // what to match 
      { footer_info, childcare_info, hbb_info, accident_info, contact_info }, // new data
      { omitUndefined: true } // true = ignore undefined data
    )
  } catch (error) {
    return res.status(500).json({ error : error.message });
  }

  if (!infoDoc) { 
    return res.status(404).json({ error : "Information doesn't exist" });
  };

  res.redirect(303, `/info`);
  
}

module.exports = {
  index,
  update
}