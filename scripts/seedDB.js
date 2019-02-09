const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/schedulizeDB");

const clientSeed = [
  {
    name: "Schedulize",
    phone: "555-555-5555",
    email: "schedualize@schedulize.com",
    position: "Grunt",
    firstName: "Tony",
    lastName: "Phakasoum",
    phone: "555-888-999",
    email: "tp@schedulize.com",
    position: "Grunt",
    billName: "Tony Phakasoum",
    billPhone: "555-655-6655",
    billEmail: "tony@schedulize.com",
    billPosition: "Peon",
    address: "1450 Frazee Rd",
    city: "San Diego",
    state: "CA",
    zipCode: "92108",
    // coords: {
    //   lat: 32.853103,
    //   lng: -117.182880
    // }
  },
  {
    name: "Schedulize Main",
    phone: "555-777-7777",
    email: "schedualizeMain@schedulize.com",
    position: "Busy Bee",
    firstName: "Tim",
    lastName: "Westberg",
    phone: "555-888-5555",
    email: "tw@schedulize.com",
    position: "CEO",
    billName: "Tim Westberg",
    billPhone: "555-775-7755",
    billEmail: "TW@schedulize.com",
    billPosition: "COO",
    address: "6256 Greenwich Dr",
    city: "San Diego",
    state: "CA",
    zipCode: "92122",
    // coords: {
    //   lat: 32.881923,
    //   lng: -117.243544
    // }
  }
];

const contractorSeed = [
  {
    firstName: "Miranda",
    lastName: "Swartwood",
    phone: "555-777-1290",
    email: "miranda@schedulize.com",
    certification: "Qualified",
    standing: "Good",
    pricing: 500,
    notes: "Good Standing",
    locationName: "Miranda LLC",
    address: "3737 Murphy Canyon Rd",
    city: "San Diego",
    state: "CA",
    postalCode: 92123,
    // coords: {
    //   lat: 32.809641,
    //   lng: -117.115324
    // }
  },
  {
    firstName: "Paul",
    lastName: "Tamayo",
    phone: "555-988-9999",
    email: "paul@schedulize.com",
    certification: "Certified",
    standing: "Good",
    pricing: 666,
    notes: "Awesome",
    locationName: "Paul T LLC",
    address: "4089 Genessee Ave",
    city: "San Diego",
    state: "CA",
    postalCode: 92111,
    // coords: {
    //   lat: 32.817031,
    //   lng: -117.18016
    // }
  },
  {
    firstName: "John",
    lastName: "Doe",
    phone: "555-777-1290",
    email: "JD@schedulize.com",
    certification: "Qualified",
    standing: "Good",
    pricing: 500,
    notes: "Good Standing",
    locationName: "JD LLC",
    address: "7708 Regents Rd",
    city: "San Diego",
    state: "CA",
    postalCode: 92122,
    // coords: {
    //   lat: 32.861728,
    //   lng: -117.223366
    // }
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    phone: "555-777-1290",
    email: "JDoe@schedulize.com",
    certification: "Certified",
    standing: "Good",
    pricing: 500,
    notes: "Good Standing",
    locationName: "Jane Doe LLC",
    address: "3810 Valley Centre Dr",
    city: "San Diego",
    state: "CA",
    postalCode: 92113,
    // coords: {
    //   lat: 32.938572,
    //   lng: -117.230389
    // }
  },
  {
    firstName: "Dwayne",
    lastName: "Johnson",
    phone: "555-777-1290",
    email: "DJ@schedulize.com",
    certification: "Qualified",
    standing: "Good",
    pricing: 500,
    notes: "Good Standing",
    locationName: "The Rock LLC",
    address: "10631 Camino Ruiz",
    city: "San Diego",
    state: "CA",
    postalCode: 92126,
    // coords: {
    //   lat: 32.91165,
    //   lng: -117.143575
    // }
  }
];

const appointmentSeed = [
  {
    // dateInput: "today",
    // apptDate: "today",
    assigneeFirstName: "firstName",
    assigneelastName: "lastName",
    assigneePhone: 1231231234,
    adjusterFirstName: "FirstName",
    adjusterLastName: "LastName",
    adjusterPhone: 1231231234,
    assignmentType: "legal",
    notes: "stuff",
    refName: "Person",
    refNumber: 5,
    locationName: "somewhere",
    address: "1234 somewhere lane",
    city: "San Diego",
    state: "CA",
    postalCode: 91911,
    employeeAssign: "employee1"
  }
];

db.Client.remove({})
  .then(() => db.Client.collection.insertMany(clientSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Contractor.remove({})
  .then(() => db.Contractor.collection.insertMany(contractorSeed))
  .then(data => {
    console.log(data.result.n + " datas inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Appointment.remove({})
  .then(() => db.Appointment.collection.insertMany(appointmentSeed))
  .then(data => {
    console.log(data.result.n + " datas inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//does this not need to be exported?
