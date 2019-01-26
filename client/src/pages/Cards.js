import React, {
    Component
  } from 'react';
  import Appointmentform from "../components/AppointmentForm"
  import ContractorCard from "../components/contractor"
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

 // ContractorCard -  this is firing an error - ./src/pages/Cards.js
// Module not found: Can't resolve '../components/contractor/contractorCard' 
// in 
// 'C:\Users\mpmks\Desktop\3\Schedulize\client\src\pages' 
// UPDATED to file directory - '..components/contractor' -ms 1/22/2019
        <ContractorCard />
  
        <ApptCard />
  
  
        </div>
      );
    }
  }
  
  export default Cards;