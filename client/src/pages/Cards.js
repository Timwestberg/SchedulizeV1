import React, {
    Component
  } from 'react';
  import Appointmentform from "../components/AppointmentForm"
  import ContractorCard from "../components/contractor"
  import ApptCard from "../components/Appointments/ApptCard"
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