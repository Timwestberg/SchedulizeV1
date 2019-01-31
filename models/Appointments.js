const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apptSchema = new Schema({
  //date apointment is put into db
  date_input: {
    type: Date,
    default: Date.now,
    trim: true
  },
  //date of appt -- required
  appt_date: {
    type: Date,
    required: true,
    trim: true
  },
  //name of appt booker --- required
  adjuster: [
    {
      first: {
        type: String,
        required: true,
        trim: true
      },
      lastname: {
        type: String,
        required: true,
        trim: true
      },
      phone: {
        type: Number,
        maxlength: 10,
        trim: true
      }
    }
  ],
  //phone number of booker

  //   billing: [
  //     {
  //       contactPerson: [
  //         {
  //           name: [
  //             {
  //               first: {
  //                 type: String,
  //                 required: true,
  //                 trim: true
  //               },
  //               lastname: {
  //                 type: String,
  //                 required: true,
  //                 trim: true
  //               }
  //             }
  //           ],
  //           phone: {
  //             type: Number,
  //             required: true,
  //             maxlength: 10,
  //             minlength: 9,
  //             trim: true
  //           },
  //           email: {
  //             type: String,
  //             lowercase: true,
  //             required: [true, "can't be blank"],
  //             match: [/\S+@\S+\.\S+/, "is invalid"],
  //             index: true,
  //             trim: true
  //           },
  //           position: {
  //             type: String,
  //             required: true,
  //             trim: true
  //           },

  //           type: Array
  //         }
  //       ],
  //       location: [
  //         {
  //           locationName: {
  //             type: String,
  //             required: true,
  //             trim: true
  //           },

  //           streetNumber: {
  //             type: String,
  //             required: true,
  //             trim: true
  //           },

  //           streetName: {
  //             type: String,
  //             required: true,
  //             trim: true
  //           },

  //           cityName: {
  //             type: String,
  //             required: true,
  //             trim: true
  //           },

  //           state: {
  //             type: String,
  //             required: true,
  //             trim: true
  //           },

  //           zipCode: {
  //             type: Number,
  //             required: true,
  //             maxlength: 5,
  //             minlength: 5,
  //             trim: true
  //           }
  //         }
  //       ]
  //     }
  //   ],
  //who appt is for --- required
  ref_name: [
    {
      first: {
        type: String,
        required: true,
        trim: true
      },
      lastname: {
        type: String,
        required: true,
        trim: true
      }
    }
  ],
  ref_num: {
    type: String,
    trim: true
  },
  //Type of appt
  ref_type: {
    type: String,
    trim: true
  },
  // date of loss
//   dol: {
//     type: Date,
//     trim: true
//   },
  //language
  language: {
    type: String,
    trim: true
  },
  //claim/ref#

  //notes
  notes: {
    type: String
  },
  //location array
  location: [
    {
      //location name --- required
      location_name: {
        type: String,
        required: true,
        trim: true
      },
      //location address line 1 --- required
      address: {
        type: String,
        required: true,
        trim: true
      },
      //location city --- required
      city: {
        type: String,
        required: true,
        trim: true
      },
      //location state --- required
      state: {
        type: String,
        required: true,
        trim: true
      },
      //location zip  --- required
      zip: {
        type: Number,
        required: true,
        maxlength: 5,
        minlength: 5
      }
    }
  ], //location end
  //contractor covering
  contractor: [
    {
      first: {
        type: String,
        // required: true,
        trim: true
      },
      lastname: {
        type: String,
        // required: true,
        trim: true
      },
      phone: {
        type: Number,
        maxlength: 10,
        minlength: 9,
        trim: true
      }
    }
  ],
  //date accepted by contactor
  date_accepted: {
    type: Date
  },
  //employee that assigned appointment --- required
  employee_assign: {
    type: String,
    required: true
  }
});

const Appointment = mongoose.model("Appointment", apptSchema);

module.exports = Appointment;
