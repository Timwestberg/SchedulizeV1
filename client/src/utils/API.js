import axios from 'axios';
import googleMaps from "../utils/keys"

const API_KEY2 = googleMaps.key

export default {
    // Gets all clients

    searchClients: function(query) {
        return axios.get("/api/clients/params?query="+query);
    },
    searchContractors: function(query) {
        return axios.get("/api/contractors/params?query="+query);
    },
    searchAppts: function(query) {
        return axios.get("/api/appointments/params?query="+query);
    },
    getClients: function() {
        return axios.get("/api/clients");
    },
    //Gets the client with the given id
    getClient: function(id) {
        return axios.get("/api/clients/one/" + id);

    },
    //Deletes the client with the give id
    deleteClient: function (id) {
        return axios.delete("/api/clients/" + id);
    },
    //Saves a client to the database
    saveClient: function (clientData) {
        return axios.post("/api/clients", clientData);
    },
    updateClient: function (_id, changes) {
        return axios.put("/api/clients/" + _id, changes);
    },
    // Gets all appts
    getAppts: function () {
        return axios.get("/api/appointments");
    },
    //Gets the appt with the given id
    getAppt: function (id) {
        return axios.get("/api/appointments/" + id);
    },
    //Deletes the appt with the give id
    deleteAppt: function (id) {
        return axios.delete("/api/appointments/" + id);
    },
    //Saves a appt to the database
    saveAppt: function (apptData) {
        return axios.post("/api/appointments", apptData);
    },
    // Gets all contractors
    getContractors: function () {
        return axios.get("/api/contractors");
    },
    //Gets the contractor with the given id
    getContractor: function (id) {
        return axios.get("/api/contractors/" + id);
    },
    //Deletes the contractor with the give id
    deleteContractor: function (id) {
        return axios.delete("/api/contractors/" + id);
    },
    //Saves a contractor to the database
    saveContractor: function (apptData) {
        return axios.post("/api/contractors", apptData);
    },
    SaveUser: function (UserData) {
        return axios.post('/auth/register', UserData);
    },
    LoginUser: function (UserData) {
        return axios.post('/auth/login', UserData);
    },
    //Geocode API
    getGeocode: function (address) {
        return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBjqqmnBeb7OUYHTEwNF_7eVl5Mnhy7FJ0")
    }
};
