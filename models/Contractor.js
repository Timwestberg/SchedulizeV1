const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contractorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
    maxlength: 10
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    trim: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true
  },
  certification: {
    type: String,
    required: true,
    trim: true,
  },
  standing: {
    type: String,
    required: true,
    trim: true,
  },
  pricing: {
    type: Number,
    required: true,
    trim: true,
  },
  notes: {
    type: String
  },
  location: [{
    locationName: {
      type: String,
      required: true,
      trim: true,
    },
    streetNumber: {
      type: String,
      required: true,
      trim: true,
    },
    streetName: {
      type: String,
      required: true,
      trim: true,
    },
    cityName: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    zipCode: {
      type: Number,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 5,
    }
  }],
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
});

const Contractor = mongoose.model("Contractor", contractorSchema);

module.exports = Contractor;