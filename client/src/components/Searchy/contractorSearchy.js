import React, { Component } from 'react';
import API from '../../utils/API';
import axios from 'axios';
// import FloatingActionButtons from "./FloatButtons";
import Grid from '@material-ui/core/Grid';


class ContractorSearch extends Component {
  state = {
    query: '',
    results: {
      contractors: []
    }
  }

  // pass search terms into get functions
// bunch 
//filter on server - 
// transmit as little info as possible 

  getInfo = () => {
    
    API.getContractors().then(contractors => console.log("contractors:ms"+contractors.data));
    // API.getClients().then(clients => console.log("Contractors:"+clients.data));
    // API.getAppts().then(appts => console.log(appts.data));
    // MUST PASS PARAM AS A QUERY IN API.JS - FIND BY FIRST NAME - 
    // Request. PARAMS. ???? 
    // ROUTE /API/CLIENTS?QUERY=+{THIS.STATE.QUERY}

    // .then(res =>
    //   this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    // )
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (

      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        {/* <FloatingActionButtons /> */}
      </form>

    )
  }
}

export default ContractorSearch



//search for contractors from mongo DB 
// create search div
      //include event for search
      //include string for search query 
     
//use data from search to connect to db and find contractors  
    //use api UTILS to get contractor info 
    //use api utils to get client info 
    //use api utils to get appt info 
            
        //include console log to ensure data retrieved - 

// allow search function to be able to sort and filter info from contractors 

//append contractor divs to display div on right side 
