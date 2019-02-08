const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    //ms 1/29/2019 wouldnt this be contractors plural?
    db.Contractor
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Contractor
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Contractor
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Contractor
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Contractor
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByParams: function (req, res) {
    console.log(req.query);
    db.Contractor
      .find({
        $or: [{
            "locationName": new RegExp(req.query.query, "i")
          },
          {
            "firstName": new RegExp(req.query.query, "i")
          },
          {
            "lastName": new RegExp(req.query.query, "i")
          },
          {
            "phone": new RegExp(req.query.query, "i")
          },
          {
            "city": new RegExp(req.query.query, "i")
          },
          {
            "certification": new RegExp(req.query.query, "i")
          }
        ]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};