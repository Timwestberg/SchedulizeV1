import React, { Component } from 'react';
import API from '../../utils/API';
// import axios from 'axios';
// import FloatingActionButtons from "./FloatButtons";
// import Grid from '@material-ui/core/Grid';


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
          this.getInfo() 
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
      </form>

    )
  }
}

export default ClientSearch

