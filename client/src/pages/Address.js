import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ClientCard from "../components/ClientCard";
import ContractCard from "../components/ContractCard";
import AppointmentCard from "../components/AppointmentCard";
import API from "../utils/API";

class Address extends Component {
  state = {
    clients: [],
    contractors: [],
    appointments: []
  };

  componentDidMount() {
    this.loadContractors();
    this.loadClients();
    this.loadAppointments();
  }

  loadClients = () => {
    API.getClients()
      .then(res => {
        console.log(res.data);
        this.setState({
          clients: res.data
        });
      })
      .catch(err => console.log(err));
  };

  loadContractors = () => {
    API.getContractors()
      .then(res => {
        console.log("contractor ", res.data);
        this.setState({
          contractors: res.data
        });
      })
      .catch(err => console.log(err));
  };

  loadAppointments = () => {
    API.getAppts()
      .then(res => {
        console.log(res.data);
        this.setState({
          appointments: res.data
        });
      })
      .catch(err => console.log(err));
  };

  removeClient = id => {
    //remove the card and not deleting from database
  };

  deleteClient = id => {
    //deleting client from API
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    console.log("State: ", this.state);
    const { contractors, clients, appointments } = this.state;
    return (
      <div>
        <Navbar />
        <br />
        {contractors.map(contractor => (
          <ContractCard
            conStreetNumber={contractor.location.streetNumber}
            conStreetName={contractor.location.streetName}
            conFirstName={contractor.firstName}
            conLastName={contractor.lastName}
            conPhone={contractor.phone}
            conEmail={contractor.email}
            conStand
            conCert={contractor.certification}
            conPrice={contractor.pricing}
            conNotes={contractor.notes}
            conLocationName={contractor.location.locationName}
            conCity={contractor.location.cityName}
            conState={contractor.location.state}
            conZipCode={contractor.location.zipCode}
          />
        ))}
        <br />
        {clients.map(client => (
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
        {appointments.map(appointment => (
          <AppointmentCard
            assigneeFirstName={appointment.assigneeFirstName}
            assigneeLastName={appointment.assigneeLastName}
            adjusterFirstName={appointment.adjusterFirstName}
            adjusterLastName={appointment.adjusterLastName}
            refName={appointment.refName}
            refNumber={appointment.refNumber}
            locationName={appointment.locationName}
            address={appointment.address}
            city={appointment.city}
            state={appointment.state}
            postalCode={appointment.postalCode}
          />
        ))}
      </div>
    );
  }
}

export default Address;
