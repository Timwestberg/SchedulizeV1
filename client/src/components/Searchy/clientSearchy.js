import React, { Component } from 'react';
import API from '../../utils/API';
import axios from 'axios';
// import FloatingActionButtons from "./FloatButtons";
import Grid from '@material-ui/core/Grid';


class ClientSearch extends Component {
  state = {
    query: '',
    results: {
      clients: []
    }
  }
  getInfo = () => {
    API.searchClients(this.state.query).then(clients => { console.log("clients:ms"+ clients.data)
  this.props.onSearchChange(clients.data)}); 
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

export default ClientSearch



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
