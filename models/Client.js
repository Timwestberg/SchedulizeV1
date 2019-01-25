const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  //company name
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: Number,
    required: true,
    maxlength: 10,
    minlength: 9,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
    trim: true
  },
  contactPerson: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: Number,
      required: true,
      maxlength: 10,
      minlength: 9,
      trim: true
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true,
      trim: true
    },
    position: {
      type: String,
      required: true,
      trim: true
    },
    type: Array
  }],
  type: {
    type: String,
    required: true,
    trim: true
  },
  // Billing aray containing two arrays contact person || and billing Location
  billing: [{
    contactPerson: [{
      name: {
        type: String,
        required: true,
        trim: true
      },
      phone: {
        type: Number,
        required: true,
        maxlength: 10,
        minlength: 9,
        trim: true
      },
      email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true,
        trim: true
      },
      position: {
        type: String,
        required: true,
        trim: true
      },

      type: Array
    }],
    location: [{
      locationName: {
        type: String,
        required: true,
        trim: true
      },

      streetNumber: {
        type: String,
        required: true,
        trim: true
      },

      streetName: {
        type: String,
        required: true,
        trim: true
      },

      cityName: {
        type: String,
        required: true,
        trim: true
      },

      state: {
        type: String,
        required: true,
        trim: true
      },

      zipCode: {
        type: Number,
        required: true,
        maxlength: 5,
        minlength: 5,
        trim: true
      }
    }]
  }]
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;