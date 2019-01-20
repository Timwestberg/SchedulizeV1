import React, { Component } from "react";
import Navbar from "../components/Navbar";
import AddressCard from "../components/AddressCard";
import AddressSearch from "../components/AddressSearch";
import API from "../utils/API";



class Address extends Component {
    state = {
        clients: [],
        name: "",
        phone: "",
        email: "",
        contactName: "",
        contactPhone: "",
        contactEmail: "",
        contactPosition: "",
        ctName: "",
        ctEmail: "",
        ctPosition: "",
        locationName: "",
        streetName: "",
        streetName: "",
        cityName: "",
        state: "",
        zipCode: ""
    };
    
    componentDidMount() {
        this.loadClients();
    }

    loadClients = () => {
        API.getClients()
          .then(res =>
            this.setState({ 
                clients: res.data, 
                name: "",
                phone: "",
                email: "",
                contactName: "",
                contactPhone: "",
                contactEmail: "",
                contactPosition: "",
                ctName: "",
                ctEmail: "",
                ctPosition: "",
                locationName: "",
                streetName: "",
                streetName: "",
                cityName: "",
                state: "",
                zipCode: ""
            })
            )
            .catch(err => console.log(err));
    };

    removeClient = (id) => {
        //remove the card and not deleting from database
    }

    deleteClient = (id) => {
        //deleting client from API
    }

    render() {
        return (
            <div>
            <Navbar/>
            <AddressSearch/>
            <AddressCard/>
            {this.state.clients.map(client => (
                <AddressCard
                  removeClient={this.removeClient}
                  id={client.id}
                  name={client.name} 
                  phone={client.phone}
                  email={client.email}
                  contactName={client.contactName}
                  contactPhone={client.contactPhone}
                  contactEmail={client.contactEmail}
                  contactPosition={client.contactPosition}
                  ctName={client.ctName}
                  ctEmail={client.ctEmail}
                  ctPosition={client.ctPosition}
                  locationName={client.locationName}
                  streetNumber={client.streetNumber}
                  streetName={client.streetName}
                  cityName={client.cityName}
                  state={client.state}
                  zipCode={client.zipCode}                  
                />
            ))}
            </div>
        )
    };
}

export default Address;