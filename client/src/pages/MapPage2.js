import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Button from '@material-ui/core/Button';
import Geocode from "react-geocode";
import Grid from '@material-ui/core/Grid';
import ContractCard from '../components/ContractCard';
import googleMaps from "../utils/keys"
import FloatButtons from "../components/FloatButtons";
import ApptMap from "../components/ApptMap";

const API_KEY2 = googleMaps.key

const style = {
    width: "50%",
    hieght: "50%"
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        gridGap: `${theme.spacing.unit * 3}px`,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

export class TestMap extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        contractors: [],
        clients: [],
        clientCoords: [],
        coords: {},
        contractorCoords: []
    };

    componentDidMount() {
        this.loadClients();
        this.loadContractors();
    };
   
    loadContractors = () => {
        API.getContractors()
            .then(res => {
                // console.log("contractor ", res.data)
                //map through contractor state and adding id to argument
                res.data.map((contractor, contractoridx) => {
                    this.loadGeocode(contractor.address, contractoridx)
                })
                this.setState({
                    contractors: res.data,
                })
            })
            .catch(err => console.log(err));
    };

    loadClients = () => {
        API.getClients()
            .then(res => {
                console.log("client ", res.data)
                res.data.map((client, clientidx) => {
                    this.clientGeocode(client.address, clientidx)
                })
                this.setState({
                    clients: res.data,
                })
            })
            .catch(err => console.log(err));
    };
    
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });
    }

    onClickAssign = () => {
        console.log("assigned");
    }

    onMapClicked = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    addressSearch = () => {
        API.getGeocode(this.state.search).then(
            res => {
                const { lat, lng } = res.data.results[0].geometry.location;
                this.setState({
                    coords: { lat, lng }
                });
                console.log(lat, lng);
            },
            error => {
                console.error(error);
            }
        );
    }


    loadGeocode = (location, contractoridx) => {
        API.getGeocode(location)
            .then(res => {
                // console.log("conGeocode", res.data)
                const { lat, lng } = res.data.results[0].geometry.location;
                let contractorCoords = this.state.contractorCoords[contractoridx] || {};
                contractorCoords = {lat: lat, lng: lng}
                this.state.contractorCoords[contractoridx] = contractorCoords
                this.setState({
                    contractorCoords: this.state.contractorCoords,
                });
                // console.log("CONS", lat, lng, contractoridx )

            })
            .catch(err => console.log(err));
    };

    clientGeocode = (location, clientidx) => {
        API.getGeocode(location)
            .then(res => {
                console.log("clientGeocode", res.data)
                const { lat, lng } = res.data.results[0].geometry.location;
                let clientCoords = this.state.clientCoords[clientidx] || {} ;
                clientCoords = { lat: lat, lng: lng }
                this.state.clientCoords[clientidx] = clientCoords;
                this.setState({
                    clientCoords: this.state.clientCoords,
                });
                console.log("CLIENTS", lat, lng, clientidx )
            })
            .catch(err => console.log(err));
    };



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        // const { classes } = props;

        console.log("State: ", this.state)
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={24} sm={12}>

                        <Navbar
                            onClick={this.addressSearch}
                            onChange={this.handleInputChange}
                            //search is equivalent to name but push through props
                            value={this.state.search}
                        />
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <ApptMap />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button onClick={() => { debugger; this.onClickAssign() }}>
                            Select a Contractor on the map below, then select this button to assign. </Button>
                        <Map
                            google={this.props.google}
                            zoom={12}
                            style={style}
                            initialCenter={{
                                lat: 32.852721,
                                lng: -117.182762
                            }}
                            onClick={this.onMapClicked}
                        >
                            <Marker
                                position={this.state.coords}
                            />
                            {this.state.clients.map((client, idx) => (
                                <Marker
                                    onClick={this.onMarkerClick}
                                    name={client.billName}
                                    title={client.firstName + " " + client.lastName}
                                    // position={client.billing.coords}
                                    position={this.state.clientCoords[idx]}
                                    key={client._id}
                                    clientID={client._id}
                                    clientID={client._id}
                                    icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                                />
                            ))}
                            {this.state.contractors.map((contractor, idx) => (
                                <Marker
                                    onClick={this.onMarkerClick}
                                    name={contractor.locationName}
                                    title={contractor.firstName + " " + contractor.lastName}
                                    // position={contractor.coords}
                                    position={this.state.contractorCoords[idx]}
                                    location={contractor.address + " " +
                                        contractor.city + " " +
                                        contractor.state + " " + contractor.postalCode}
                                    key={contractor._id}
                                    contractorID={contractor._id}
                                    contractorID={contractor._id}
                                    icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                                />
                            ))}
                            <InfoWindow
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}>
                                <div>
                                    <h1>{this.state.selectedPlace.name}</h1>
                                    <p>{this.state.selectedPlace.title}</p>
                                    <p>{this.state.selectedPlace.location}</p>
                                </div>
                            </InfoWindow>
                        </Map>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <ContractCard />
                    </Grid>
                </Grid>
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyBjqqmnBeb7OUYHTEwNF_7eVl5Mnhy7FJ0"
})(TestMap)