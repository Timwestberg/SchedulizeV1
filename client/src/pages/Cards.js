import React, {
    Component
  } from 'react';
  import Appointmentform from "../components/AppointmentForm"
  import ContractorCard from "../components/contractor/index"
  // import ApptCard from "../components/ApptCard"
  import Navbar from "../components/Navbar"
  import NewAppoointmentForm from "../components/NewAppointmentForm/NewAppointment"
  // import './App.css';
  
  class Cards extends Component {
    render() {
      return ( 
        <
        div className = "App" >
        <Navbar/>
        <Appointmentform />
  
        <ContractorCard />
  
        <NewAppoointmentForm />
  
  
        </div>
      );
    }
  }
  
  export default Cards;