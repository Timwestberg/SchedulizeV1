const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Appointment
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Appointment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Appointment
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Appointment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Appointment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByParams: function(req, res) {
    console.log(req.query);
    db.Appointment
    .find({$or: [{"refName": new RegExp(req.query.query,"i")}, {"assigneePhone": new RegExp(req.query.query,"i")}, {"locationName": new RegExp(req.query.query,"i")}, {"refNumber": new RegExp(req.query.query,"i")}]})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
