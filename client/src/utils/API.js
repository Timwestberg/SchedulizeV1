import axios from 'axios';

export default {
	// Gets all clients
	getClients: function() {
		return axios.get('/api/clients');
	},
	//Gets the client with the given id
	getClient: function(id) {
		return axios.get('/api/clients/' + id);
	},
	//Deletes the client with the give id
	deleteClient: function(id) {
		return axios.delete('/api/clients/' + id);
	},
	//Saves a client to the database
	saveClient: function(clientData) {
		return axios.post('/api/clients', clientData);
	},
	updateClient: function(_id) {
		return axios.put('/api/client/' + _id);
	},
	// Gets all appts
	getAppts: function() {
		return axios.get('/api/appointments');
	},
	//Gets the appt with the given id
	getAppt: function(id) {
		return axios.get('/api/appointments/' + id);
	},
	//Deletes the appt with the give id
	deleteAppt: function(id) {
		return axios.delete('/api/appointments/' + id);
	},
	//Saves a appt to the database
	saveAppt: function(apptData) {
		return axios.post('/api/appointments', apptData);
	},
	// Gets all contractors
	getContractors: function() {
		return axios.get('/api/contractors');
	},
	//Gets the contractor with the given id
	getContractor: function(id) {
		return axios.get('/api/contractors/' + id);
	},
	//Deletes the contractor with the give id
	deleteContractor: function(id) {
		return axios.delete('/api/contractors/' + id);
	},
	//Saves a contractor to the database
	saveContractor: function(apptData) {
		return axios.post('/api/contractors', apptData);
	},

	SaveUser: function(UserData) {
		return axios.post('/auth/register', UserData);
	},

	LoginUser: function(UserData) {
		return axios.post('/auth/login', UserData);
	}
};
