import React from "react";
import Calendar from "./Calendar";
import Map from "./MapPage2";
import AddressBook from "./Address";
import NavBar from '../components/Navbar'

class Schedulize extends React.Component {
  state = {
    currentPage: "AddressBook"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Calendar") {
      return <Calendar />;
    } else if (this.state.currentPage === "AddressBook") {
      return <AddressBook />;
    } else if (this.state.currentPage === "Map") {
      return <Map />;
    }
  };

  render() {
    return (
      <div>
        <NavBar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Schedulize;
