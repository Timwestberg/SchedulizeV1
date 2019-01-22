import React, {
    Component
  } from 'react';
  import Appointmentform from "../components/NewAppointmentForm/NewAppointment"
  import ContractorCard from "../components/contractor/contractorCard"
  import ApptCard from "../components/ApptCard"
  import Navbar from "../components/Navbar"
  // import './App.css';
  
  class Cards extends Component {
    render() {
      return ( 
        <
        div className = "App" >
        <Navbar/>
        <Appointmentform />
  
        <ContractorCard />
  
        <ApptCard />
  
  
        </div>
      );
    }
  }
  
  export default Cards;