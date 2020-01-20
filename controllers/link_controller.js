function create(req, res) {
    let { nameofdoc, url } = req.body;
    let link = { nameofdoc, url };
  
    LinkModel.create(link)
      .then(link => {
        return res.render("success");
      })
      .catch(err => {
        return res.status(500).send(`Error: ${err}`);
      });
  }

  