import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ClientCard from "../components/ClientCard";
import ContractCard from "../components/ContractCard";
import API from "../utils/API";


class Address extends Component {
    state = {
        clients: [],
        contractors: []
    };
    
    componentDidMount() {
        this.loadContractors();
        this.loadClients();
    };

    loadClients = () => {
        API.getClients()
          .then(res => {
            console.log("client", res.data)
            this.setState({ 
                clients: res.data, 
            })
        })
        // API.getContractors()
        // .then(res => 
        //   console.log(res.data)
        //   this.setState({ 
        //       contractors: res.data, 
        //     })
        // })
            .catch(err => console.log(err));
    };

    // loadContractors = () => {
    //     API.getContractors()
    //       .then(res => {
    //         console.log("contractor ", res.data)
    //         this.setState({ 
    //             contractors: res.data, 
    //         })
    //     })
    //         .catch(err => console.log(err));
    // };

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
        console.log("State: ", this.state)
        return (
            <div>
            <Navbar/>
            <br></br>
            {this.state.contractors.map(contractor => (
            <ContractCard
            // conStreetNumber={contractor.location.streetNumber}
            // conStreetName={contractor.location.streetName}
            />
            ))}
            <br></br>
            {this.state.clients.map(client => (
            <ClientCard 
            companyName={client.name}
            clientPhone={client.phone}
            clientEmail={client.email}
            position={client.position}
            clientFirstName={client.contactPerson.firstName}
            clientLastName={client.contactPerson.lastName}
            billContact={client.billing.contactPerson.name}
            clientStreetName={client.billing.location.streetName}
            clientStreetNumber={client.billing.location.streetNumber}
            billPhone={client.billing.contactPerson.phone}
            billEmail={client.billing.contactPerson.email}
            clientCity={client.billing.location.cityName}
            clientZipCode={client.billing.location.zipCode}
            clientState={client.billing.location.state}
            />
            ))}
            </div>
        )




    }
}


    export default Address;