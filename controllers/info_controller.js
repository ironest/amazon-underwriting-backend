const InfoModel = require('../database/models/info_model')

async function index(req, res) {
  //showed a list of all the resources

  let info = await InfoModel.find()  // Extracting all the info from the DB
  res.json( info[0] )                   // Returns the data

}

async function update(req, res) {
  //updates the resource

  let { id } = req.params // Destructure off the id off req.params

  let { footer_info, childcare_info, hbb_info, accident_info, contact_info } = req.body // Destructure infos off req.body

  await InfoModel.findByIdAndUpdate(id, { footer_info, childcare_info, hbb_info, accident_info, contact_info }) // Update the info fields.
  res.redirect(`/info`);

}

module.exports = {
  index,
  update
}