const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Client
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Client
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Client
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    //console log to see if postman is reaching update route
    console.log("reached update")
    db.Client
      .findOneAndUpdate({ _id: req.params._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Client
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByParams: function(req, res) {
    // console.log(req.query);
    db.Client
    .find({$or: [{"contactPerson.firstName": new RegExp(req.query.query,"i")}, {"contactPerson.lastName": new RegExp(req.query.query,"i")}, {"contactPerson.phone": new RegExp(req.query.query,"i")}, {"billing.location.locationName": new RegExp(req.query.query,"i")}]})
    // .find({"contactPerson.firstName": new RegExp(req.query.query,"i")})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
