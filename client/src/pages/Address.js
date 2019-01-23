import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ClientCard from "../components/ClientCard";
import ContractCard from "../components/ContractCard";
import API from "../utils/API";


class Address extends Component {
    state = {
        clients: [],
        name: "",
        phone: "",
        email: "",
        clientType: [],
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

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        return (
            <div>
            <Navbar/>
            <br></br>
            <ContractCard/>
            <br></br>
            <ClientCard/>
            {this.state.clients.map(client => (
            <ClientCard 
            name={client.name}
            />
            ))}
            </div>
        )




    }
}


    export default Address;