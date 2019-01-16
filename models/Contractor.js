const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contractorSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Contractor = mongoose.model("Contractor", contractorSchema);

module.exports = Contractor;
