function create(req, res) {
    let { pagename, doc } = req.body;
    let page = { pagename, doc };
  
    PageModel.create(page)
      .then(page => {
        return res.render("success");
      })
      .catch(err => {
        return res.status(500).send(`Error: ${err}`);
      });
  }