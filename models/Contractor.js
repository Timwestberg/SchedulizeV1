const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contractorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    maxlength: 12
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    trim: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  },
  // certification: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // standing: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  pricing: {
    type: String,
    required: true,
    trim: true
  },
  notes: {
    type: String
  },
  locationName: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  postalCode: {
    type: Number,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 5
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Contractor = mongoose.model("Contractor", contractorSchema);

module.exports = Contractor;
