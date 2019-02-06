const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  //company name
  // client: {
  //   firstName: {
  //     type: String,
  //     required: true,
  //     trim: true
  //   },
  //   lastName: {
  //     type: String,
  //     required: true,
  //     trim: true
  //   },
  //   phone: {
  //     type: String,
  //     required: true,
  //     maxlength: 12,
  //     minlength: 9,
  //     trim: true
  //   }
  // },
  clientName: {
    type: String,
    required: true,
    trim: true
  },
  // phone: {
  //   type: String,
  //   required: true,
  //   maxlength: 12,
  //   minlength: 9,
  //   trim: true
  // },
  // email: {
  //   type: String,
  //   lowercase: true,
  //   required: [true, "can't be blank"],
  //   match: [/\S+@\S+\.\S+/, "is invalid"],
  //   index: true,
  //   trim: true
  // },
  position: {
    type: String,
    required: true,
    trim: true
  },
  notes: {
    type: String,
    required: false,
    trim: true
  },
  contactPerson: {
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
      maxlength: 12,
      minlength: 9,
      trim: true
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
      trim: true
    }
    // position: {
    //   type: String,
    //   required: true,
    //   trim: true
    // }
  },
  clientType: {
    type: String,
    required: true,
    trim: true
  },
  // // Billing aray containing two arrays contact person || and billing Location
  billing: {
    contactBilling: {
      name: {
        type: String,
        required: true,
        trim: true
      },
      phone: {
        type: String,
        required: true,
        maxlength: 12,
        minlength: 9,
        trim: true
      },
      email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, "is invalid"],
        index: true,
        trim: true
      }
      // position: {
      //   type: String,
      //   required: true,
      //   trim: true
      // }
    },
    location: {
      // locationName: {
      //   type: String,
      //   required: true,
      //   trim: true
      // },

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

      zipCode: {
        type: String,
        required: true,
        maxlength: 5,
        minlength: 5,
        trim: true
      }
    }
  }
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
