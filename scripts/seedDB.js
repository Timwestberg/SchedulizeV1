const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/schedulizeDB");

const clientSeed = [
  {
    name: "Schedulize",
    phone: "555-555-5555",
    email: "schedualize@schedulize.com",
    position: "Grunt",
    contactPerson: {
      firstName: "Tony",
      lastName: "Phakasoum",
      phone: "555-888-999",
      email: "tp@schedulize.com",
      position: "Grunt"
    },
    billing: {
      contactPerson: {
        name: "Tony Phakasoum",
        phone: "555-655-6655",
        email: "tony@schedulize.com",
        position: "Peon"
      },
      location: {
        locationName: "Schedulize Main Office",
        streetNumber: "7777",
        streetName: "Scehdulize Lane",
        cityName: "San Diego",
        state: "CA",
        zipCode: "92111"
      }
    }
  },
  {
    name: "Schedulize Main",
    phone: "555-777-7777",
    email: "schedualizeMain@schedulize.com",
    position: "Busy Bee",
    contactPerson: {
      firstName: "Tim",
      lastName: "Westberg",
      phone: "555-888-5555",
      email: "tw@schedulize.com",
      position: "CEO"
    },
    billing: {
      contactPerson: {
        name: "Tim Westberg",
        phone: "555-775-7755",
        email: "TW@schedulize.com",
        position: "COO"
      },
      location: {
        streetNumber: "8888",
        streetName: "ScehdulizeHQ Lane",
        cityName: "San Diego",
        state: "CA",
        zipCode: "92111"
      }
    }
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
    location: {
      locationName: "Miranda LLC",
      streetNumber: "3737",
      streetName: "Murphy Canyon Rd",
      cityName: "San Diego",
      state: "CA",
      zipCode: 92123,
      coords: {
        lat: 32.809641,
        lng: -117.115324
      }
    }
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
    location: {
      locationName: "Paul T LLC",
      streetNumber: "4089",
      streetName: "Genessee Ave",
      cityName: "San Diego",
      state: "CA",
      zipCode: 92111,
      coords: {
        lat: 32.817031,
        lng: -117.18016
      }
    }
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
    location: {
      locationName: "JD LLC",
      streetNumber: "7708",
      streetName: "Regents Rd",
      cityName: "San Diego",
      state: "CA",
      zipCode: 92122,
      coords: {
        lat: 32.861728,
        lng: -117.223366
      }
    }
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
    location: {
      locationName: "Jane Doe LLC",
      streetNumber: "3810",
      streetName: "Valley Centre Dr",
      cityName: "San Diego",
      state: "CA",
      zipCode: 92113,
      coords: {
        lat: 32.938572,
        lng: -117.230389
      }
    }
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
    location: {
      locationName: "The Rock LLC",
      streetNumber: "10631",
      streetName: "Camino Ruiz",
      cityName: "San Diego",
      state: "CA",
      zipCode: 92126,
      coords: {
        lat: 32.91165,
        lng: -117.143575
      }
    }
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
