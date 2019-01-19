const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apptSchema = new Schema({
  //date apointment is put into db
  date_input: { type: Date, default: Date.now },
  //date of appt -- required
  appt_date: { type: Date, required: true },
  //name of appt booker --- required
  booker_name: { type: String, required: true },
  //phone number of booker
  booker_num: { type: Number, maxlength: 10},
  //Billing info for assignment/Client 
  billing_info: { type: String },
  //Billing contact person 
  billing_contact: { type: String},
  //Billing contact person phone number 
  billing_num: { type: Number, maxlength: 10},
  //who appt is for --- required
  appt_name:  { type: String, required: true },
  //Type of appt 
  appt_type: { type: String },
  // date of loss
  dol: {type: Date},
  //language  
  language: { type: String },
  //claim/ref#  
  claim_num: { type: String },
  //notes 
  notes: { type: String },
  //location array
  location: [{
  //location name --- required
  location_name: { type: String, required: true },
  //location address line 1 --- required
  address: { type: String, required: true },
  //location city --- required
  city: { type: String, required: true },
  //location state --- required
  state: { type: String, required: true },
  //location zip  --- required
  zip: { type: Number, required: true },
}], //location end
  //contractor covering 
  contractor: { type: String },
  //date accepted by contactor 
  date_accepted: { type: Date },
  //employee that assigned appointment --- required 
  employee_assign: { type: String, required: true }
});

const Appointment = mongoose.model("Appointment", apptSchema);

module.exports = Appointment;
