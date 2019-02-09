const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apptSchema = new Schema({
  //date apointment is put into db
  dateInput: {
    type: Date,
    default: Date.now,
    trim: true
  },
  //date of appt -- required
  apptDate: {
    type: Date,
    // required: true,
    trim: true
  },
  //name of appt booker --- required
  assigneeFirstName: {
    type: String,
    // required: true,
    trim: true
  },
  assigneeLastName: {
    type: String,
    // required: true,
    trim: true
  },
  // assigneePhone: {
  //   type: Number,
  //   maxlength: 10,
  //   trim: true
  // },
  adjusterFirstName: {
    type: String,
    // required: true,
    trim: true
  },
  adjusterLastName: {
    type: String,
    // required: true,
    trim: true
  },
  // adjusterPhone: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  //Type of appt
  // assignmentType: {
  //   type: String,
  //   trim: true
  // },
  //notes
  // notes: {
  //   type: String
  // },
  refName: {
    type: String,
    trim: true
  },
  refNumber: {
    type: String,
    trim: true
  },
  //location name --- required
  locationName: {
    type: String,
    // required: true,
    trim: true
  },
  //location address line 1 --- required
  address: {
    type: String,
    // required: true,
    trim: true
  },
  //location city --- required
  city: {
    type: String,
    // required: true,
    trim: true
  },
  //location state --- required
  state: {
    type: String,
    // required: true,
    trim: true
  },
  //location zip  --- required
  postalCode: {
    type: String,
    // required: true,
    maxlength: 5,
    minlength: 5
  },
  contractors:  [
    {
    type: Schema.Types.ObjectId,
    ref: "Contractor"
  }
] ,
  //location end
  //contractor covering
  //   contractor: [
  //     {
  //       first: {
  //         type: String,
  //         required: true,
  //         trim: true
  //       },
  //       lastname: {
  //         type: String,
  //         required: true,
  //         trim: true
  //       },
  //       phone: {
  //         type: Number,
  //         maxlength: 10,
  //         minlength: 9,
  //         trim: true
  //       }
  //     }
  //   ],
  //date accepted by contactor
  // date_accepted: {
  //   type: Date
  // },
  //employee that assigned appointment --- required
  // employeeAssign: {
  //   type: String,
  //   required: true
  // }
});

const Appointment = mongoose.model("Appointment", apptSchema);

module.exports = Appointment;
