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
   res.json(link); //change to react view later
 }
// form for admin to change documents
 async function make (req, res) {
   //res.render() the document edit page/form
 }

async function show (req, res) {
  let { id } = req.params
  let link = await LinkModel.findById(id)
  res.json(link)
  // res.render() the specific document
}

 async function destroy (req, res) {
  let { id } = req.params
  await LinkModel.findByIdAndRemove(id)
  res.json("deleted"); // change to react view later
}

async function update (req, res) {
  let { page, name, url} = req.body
  let { id } = req.params
  await LinkModel.findByIdAndUpdate(id, {page, name, url})
  res.json("success");
  // res.render() the admin page
}

  module.exports = {
    create,
    index,
    show,
    destroy,
    update
  }

  
