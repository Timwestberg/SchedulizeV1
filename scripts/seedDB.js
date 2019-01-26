const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/schedulizeDB"
  );

  const clientSeed = [
      {
          name: "Schedulize",
          phone: "555-555-5555",
          email: "schedualize@schedulize.com",
          position: "Grunt",
          contactPerson: 
            {
              firstName: "Tony",
              lastName: "Phakasoum",
              phone: "555-555-5555",
              email: "tp@schedulize.com",
              position: "Grunt",
            },
          billing:
            {
              contactPerson: 
                {
                  name: "Tony Phakasoum",
                  phone: "555-655-6655",
                  email: "tony@schedulize.com",
                  position: "Peon",

                },
              location:
                {
                  locationName: "Schedulize Main Office",
                  streetNumber: "7777",
                  streetName: "Scehdulize Lane",
                  cityName: "San Diego",
                  state: "CA",
                  zipCode: "92111"
                }
            },
      },
      {
        name: "Schedulize Main",
        phone: "555-777-7777",
        email: "schedualizeMain@schedulize.com",
        position: "Busy Bee",
        contactPerson: 
          {
            firstName: "Tim",
            lastName: "W",
            phone: "555-888-5555",
            email: "tw@schedulize.com",
            position: "CEO",
          },
        billing:
          {
            contactPerson:
              {
                name: "Tim W",
                phone: "555-775-7755",
                email: "TW@schedulize.com",
                position: "COO",

              },
            location: 
              {
                streetNumber: "8888",
                streetName: "ScehdulizeHQ Lane",
                cityName: "San Diego",
                state: "CA",
                zipCode: "92111"
              }
          },
    },
  ]

  const contractorSeed = [
    {
      firstName: "Miranda",
      lastName: "S",
      phone: "555-777-0000",
      email: "miranda@schedulize.com",
      certification: "9999999",
      standing: "Good",
      pricing: "$500",
      notes: "good standing",
      location:
        {
          locationName: "Miranda LLC",
          streetNumber: "8888",
          streetName: "Miranda Lane",
          cityName: "San Diego",
          state: "CA",
          zipCode: "92113"
        }
    },
    {
      firstName: "Paul",
      lastName: "T",
      phone: "555-988-9999",
      email: "paul@schedulize.com",
      certification: "777777",
      standing: "Good",
      pricing: "$666",
      notes: "Awesome",
      location: 
        {
          locationName: "Paul T LLC",
          streetNumber: "7777",
          streetName: "Paul Lane",
          cityName: "San Diego",
          state: "CA",
          zipCode: "92114"
        }
    },
  ]

  db.Client
  .remove({})
  .then(() => db.Client.collection.insertMany(clientSeed))
  // .then(() => db.Contractor.collection.insertMany(contractorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Contractor
  .remove({})
  .then(() => db.Contractor.collection.insertMany(contractorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  