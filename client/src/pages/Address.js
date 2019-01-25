import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ClientCard from "../components/ClientCard";
import ContractCard from "../components/ContractCard";
import API from "../utils/API";


class Address extends Component {
    state = {
        clients: [],
        clientName: "",
        clientPhone: "",
        clientEmail: "",
        clientType: [],
        contactName: "",
        contactPhone: "",
        contactEmail: "",
        contactPosition: "",
        ctName: "",
        ctEmail: "",
        ctPosition: "",
        clientLocationName: "",
        clientStreetNunmber: "",
        clientStreetName: "",
        clientCity: "",
        clientState: "",
        clientZipCode: ""
    };
    
    componentDidMount() {
        this.loadClients();
    }

    loadClients = () => {
        API.getClients()
          .then(res =>
            this.setState({ 
                clients: res.data, 
                clientName: "",
                clientPhone: "",
                clientEmail: "",
                contactName: "",
                contactPhone: "",
                contactEmail: "",
                contactPosition: "",
                ctName: "",
                ctEmail: "",
                ctPosition: "",
                clientLocationName: "",
                clientStreetNumber: "",
                clientStreetName: "",
                clientCity: "",
                clientState: "",
                clientZipCode: ""
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
            <ClientCard
            clientName="Tony"
            clientPhone="555-555-5555"
            clientEmail="schedulized@gmail.com"
            clientType="investigation"
            clientStreetNumber="10228"
            clientStreetName="Keoki"
            />
            {this.state.clients.map(client => (
            <ClientCard 
            clientPhone={client.clientPhone}
            clientEmail={client.clientEmail}
            clientStreetNumber={client.clientStreetNumber}
            clientStreetName={client.clientStreetName}
            clientCity={client.clientCity}
            clientState={client.clientState}
            clientZipCode={client.clientZipCode}
            />
            ))}
            </div>
        )




    }
}


    export default Address;