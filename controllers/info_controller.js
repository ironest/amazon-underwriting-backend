function create(req, res) {
    //logic for creating a resource
}

function index(req, res) {
    //showed a list of all the resources
}

function make(req, res) {
    //shows the form to create the resource
}

function destroy(req, res) {
    //deletes the resource
}

  let { footer_info, childcare_info, hbb_info, accident_info, contact_info } = req.body // Destructure infos off req.body

  await InfoModel.findByIdAndUpdate(id, { footer_info, childcare_info, hbb_info, accident_info, contact_info }) // Update the info fields.
  res.redirect(`/info`);

function edit(req, res) {
    //shows the form to edit the resource
}

module.exports = {
    create,
    index,
    make,
    destroy,
    show,
    update,
    edit
}