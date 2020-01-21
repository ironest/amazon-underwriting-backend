const LinkModel = require("./../database/models/link_model");

function create(req, res) {
    let { page, name,  url } = req.body;
    let link = { page, name, url };
  
    LinkModel.create(link)
      .then(link => {
        return res.json("success");
      })
      .catch(err => {
        return res.status(500).send(`Error: ${err}`);
      });
  }

// async function create (req, res) {
//   let { id } = req.params
//   let { body } = req.body
//   let page  = await PageModel.findById(id)
//   page.link.push({body})
//   await page.save()
// }

 async function index(req, res) {
   let link = await LinkModel.find()
   res.json(link);
 }

 async function destroy (req, res) {
  let { id } = req.params
  await LinkModel.findByIdAndRemove(id)
  res.json("deleted");
}

  module.exports = {
    create,
    index,
    destroy
  }

  