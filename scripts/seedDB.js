const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/schedulizeDB');

const clientSeed = [
	{
		clientName: 'Schedulize',
		position: 'CEO',
		notes: '',
		firstName: 'Tony',
		lastName: 'Phakasoum',
		phone: '555-888-999',
		email: 'tony@schedulize.com',
		clientType: 'insurance',
		billing: {
			name: 'Tony Phakasoum',
			phone: '555-655-6655',
			email: 'tony@schedulize.com',
			address: '1450 Frazee Rd',
			city: 'San Diego',
			state: 'CA',
			zipCode: '92108'
		}
	},
	{
		clientName: 'Schedulize',
		position: 'CEO',
		notes: '',
		firstName: 'Tim',
		lastName: 'WestBerg',
		phone: '555-888-999',
		email: 'tim@schedulize.com',
		clientType: 'Workers Compensation',
		billing: {
			name: 'Tim Westberg',
			phone: '555-655-6655',
			email: 'tim@schedulize.com',
			address: '1450 Frazee Rd',
			city: 'San Diego',
			state: 'CA',
			zipCode: '92108'
		}
	},
	{
		clientName: 'Schedulize',
		position: 'CEO',
		notes: '',
		firstName: 'Miranda',
		lastName: 'Swartwood',
		phone: '555-888-999',
		email: 'tony@schedulize.com',
		clientType: 'insurance',
		billing: {
			name: 'Miranda Swartwood',
			phone: '555-655-6655',
			email: 'miranda@schedulize.com',
			address: '1450 Frazee Rd',
			city: 'San Diego',
			state: 'CA',
			zipCode: '92108'
		}
	},
	{
		clientName: 'Schedulize',
		position: 'CEO',
		notes: '',
		firstName: 'Paul',
		lastName: 'Tamayo',
		phone: '555-888-999',
		email: 'paul@schedulize.com',
		clientType: 'insurance',
		billing: {
			name: 'Paul Tamayo',
			phone: '555-655-6655',
			email: 'paul@schedulize.com',
			address: '1450 Frazee Rd',
			city: 'San Diego',
			state: 'CA',
			zipCode: '92108'
		}
	},
	{
		name: 'Company Name',
		phone: '555-555-7777',
		email: 'mpmks1@try.com',
		position: 'CEO',
		firstName: 'Mira',
		lastName: 'Starwars',
		phone: '555-666-5555',
		email: 'orange@county.com',
		position: 'Boss',
		billing: {
			name: 'Mira Starwars',
			phone: '777-775-7755',
			email: 'TW@schedulize.com',
			position: 'COO',
			address: '95700 Gilman Dr',
			city: 'San Diego',
			state: 'CA'
			// zipCode: "92093",
			// coords: {
			//   lat: 32.881923,
			//   lng: -117.243544
			// }
		}
	}
];

const contractorSeed = [
	{
		firstName: 'Miranda',
		lastName: 'Swartwood',
		phone: '555-777-1290',
		email: 'miranda@schedulize.com',
		certification: 'Qualified',
		standing: 'Good',
		pricing: 500,
		notes: 'Good Standing',
		locationName: 'Miranda LLC',
		address: '3737 Murphy Canyon Rd',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92123
		// coords: {
		//   lat: 32.809641,
		//   lng: -117.115324
		// }
	},
	{
		firstName: 'Paul',
		lastName: 'Tamayo',
		phone: '555-988-9999',
		email: 'paul@schedulize.com',
		certification: 'Certified',
		standing: 'Good',
		pricing: 666,
		notes: 'Awesome',
		locationName: 'Paul T LLC',
		address: '4089 Genessee Ave',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92111
		// coords: {
		//   lat: 32.817031,
		//   lng: -117.18016
		// }
	},
	{
		firstName: 'John',
		lastName: 'Doe',
		phone: '555-777-1290',
		email: 'JD@schedulize.com',
		certification: 'Qualified',
		standing: 'Good',
		pricing: 500,
		notes: 'Good Standing',
		locationName: 'JD LLC',
		address: '7708 Regents Rd',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92122
		// coords: {
		//   lat: 32.861728,
		//   lng: -117.223366
		// }
	},
	{
		firstName: 'Jane',
		lastName: 'Doe',
		phone: '555-777-1290',
		email: 'JDoe@schedulize.com',
		certification: 'Certified',
		standing: 'Good',
		pricing: 500,
		notes: 'Good Standing',
		locationName: 'Jane Doe LLC',
		address: '3810 Valley Centre Dr',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92113
		// coords: {
		//   lat: 32.938572,
		//   lng: -117.230389
		// }
	},
	{
		firstName: 'Dwayne',
		lastName: 'Johnson',
		phone: '555-777-1290',
		email: 'DJ@schedulize.com',
		certification: 'Qualified',
		standing: 'Good',
		pricing: 500,
		notes: 'Good Standing',
		locationName: 'The Rock LLC',
		address: '10631 Camino Ruiz',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92126
		// coords: {
		//   lat: 32.91165,
		//   lng: -117.143575
		// }
	},
	{
		firstName: 'Samuel',
		lastName: 'Mayor',
		phone: '555-988-9999',
		email: 'paul@schedulize.com',
		certification: 'Certified',
		standing: 'Good',
		pricing: 666,
		notes: 'Awesome',
		locationName: 'Sam T LLC',
		address: '1348 Hymettus Ave',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92024
		// coords: {
		//   lat: 32.817031,
		//   lng: -117.18016
		// }
	},
	{
		firstName: 'Jose',
		lastName: 'Dewey',
		phone: '555-777-1290',
		email: 'JD@schedulize.com',
		certification: 'Qualified',
		standing: 'Good',
		pricing: 500,
		notes: 'Good Standing',
		locationName: 'JD LLC',
		address: '9700 Regents Rd',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92122
		// coords: {
		//   lat: 32.861728,
		//   lng: -117.223366
		// }
	},
	{
		firstName: 'Joseph',
		lastName: 'Doe',
		phone: '555-777-1290',
		email: 'JDoe@schedulize.com',
		certification: 'Certified',
		standing: 'Good',
		pricing: 500,
		notes: 'Good Standing',
		locationName: 'Joseph Doe LLC',
		address: '9852 Valley Centre Dr',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92113
		// coords: {
		//   lat: 32.938572,
		//   lng: -117.230389
		// }
	},
	{
		firstName: 'Dwayne',
		lastName: 'Johnston',
		phone: '555-777-1290',
		email: 'DJ@schedulize.com',
		certification: 'Qualified',
		standing: 'Good',
		pricing: 500,
		notes: 'Good Standing',
		locationName: 'The Rock LLC',
		address: '10631 Camino Ruiz',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92126
		// coords: {
		//   lat: 32.91165,
		//   lng: -117.143575
		// }
	}
];

const appointmentSeed = [
	{
		dateInput: '2019-02-09',
		apptDate: '2019-02-08',
		assigneeFirstName: 'Dom',
		assigneeLastName: 'Toretto',
		assigneePhone: 1231231234,
		adjusterFirstName: 'Brian',
		adjusterLastName: 'Spilner',
		adjusterPhone: 1231231234,
		assignmentType: 'legal',
		notes: 'A Quarter Mile at a Time',
		refName: 'Dean Rogers',
		refNumber: 5,
		locationName: 'DSS',
		address: '1450 Frazee Rd',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92108,
		employeeAssign: 'Luke Hobbs'
	},
	{
		dateInput: '2019-02-09',
		apptDate: '2019-02-07',
		assigneeFirstName: 'Dom',
		assigneeLastName: 'Toretto',
		assigneePhone: 1231231234,
		adjusterFirstName: 'Brian',
		adjusterLastName: 'Spilner',
		adjusterPhone: 1231231234,
		assignmentType: 'legal',
		notes: 'A Quarter Mile at a Time',
		refName: 'Bryan Hobbs',
		refNumber: 5,
		locationName: 'DSS',
		address: '4940, 4340 Genesee Ave',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92117,
		employeeAssign: 'Luke Hobbs'
	},
	{
		firstName: 'Rod',
		lastName: 'Swartwood',
		phone: '555-777-1290',
		email: 'Rod@schedulize.com',
		certification: 'Qualified',
		standing: 'Good',
		pricing: 500,
		notes: 'Good Standing',
		locationName: 'HR Prime LLC',
		address: '1257 Armorlite Dr',
		city: 'San Marcos',
		state: 'CA',
		postalCode: 92026
		// coords: {
		//   lat: 32.809641,
		//   lng: -117.115324
		// }
	},
	{
		dateInput: '2019-02-09',
		apptDate: '2019-02-12',
		assigneeFirstName: 'Dom',
		assigneeLastName: 'Toretto',
		assigneePhone: 1231231234,
		adjusterFirstName: 'Brian',
		adjusterLastName: 'Spilner',
		adjusterPhone: 1231231234,
		assignmentType: 'legal',
		notes: 'A Quarter Mile at a Time',
		refName: 'Dom Toretto',
		refNumber: 5,
		locationName: 'DSS',
		address: '8685 Rio San Diego Dr',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92108,
		employeeAssign: 'Luke Hobbs'
	},
	{
		dateInput: '2019-02-09',
		apptDate: '2019-02-16',
		assigneeFirstName: 'John',
		assigneeLastName: 'Grow',
		assigneePhone: 1231231234,
		adjusterFirstName: 'Brian',
		adjusterLastName: 'Spilner',
		adjusterPhone: 1231231234,
		assignmentType: 'legal',
		notes: 'A Quarter Mile at a Time',
		refName: 'John Grow',
		refNumber: 5,
		locationName: 'DSS',
		address: '4718 Clairemont Mesa Blvd',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92117,
		employeeAssign: 'Luke Hobbs'
	},
	{
		dateInput: '2019-02-09',
		apptDate: '2019-02-10',
		assigneeFirstName: 'Jaime',
		assigneeLastName: 'TJackson',
		assigneePhone: 1231231234,
		adjusterFirstName: 'Brian',
		adjusterLastName: 'Spilner',
		adjusterPhone: 1231231234,
		assignmentType: 'legal',
		notes: 'A Quarter Mile at a Time',
		refName: 'Jaime Jackson',
		refNumber: 5,
		locationName: 'DSS',
		address: '5556 Copley Dr',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92111,
		employeeAssign: 'Luke Hobbs'
	},
	{
		dateInput: '2019-02-09',
		apptDate: '2019-02-10',
		assigneeFirstName: 'Tom',
		assigneeLastName: 'Toreto',
		assigneePhone: 1231231234,
		adjusterFirstName: 'Brian',
		adjusterLastName: 'Spilner',
		adjusterPhone: 1231231234,
		assignmentType: 'legal',
		notes: 'A Quarter Mile at a Time',
		refName: 'Brian Spilner',
		refNumber: 5,
		locationName: 'DSS',
		address: '5400 Governor Dr',
		city: 'San Diego',
		state: 'CA',
		postalCode: 92122,
		employeeAssign: 'Luke Hobbs'
	}
];

db.Client
	.remove({})
	.then(() => db.Client.collection.insertMany(clientSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

db.Contractor
	.remove({})
	.then(() => db.Contractor.collection.insertMany(contractorSeed))
	.then((data) => {
		console.log(data.result.n + ' datas inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

db.Appointment
	.remove({})
	.then(() => db.Appointment.collection.insertMany(appointmentSeed))
	.then((data) => {
		console.log(data.result.n + ' datas inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
//does this not need to be exported?
