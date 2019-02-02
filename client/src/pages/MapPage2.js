import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Button from '@material-ui/core/Button';
import Geocode from "react-geocode";
import Grid from '@material-ui/core/Grid';
import ContractCard from '../components/ContractCard';
import googleMaps from "../utils/keys"

const API_KEY = googleMaps.key

Geocode.setApiKey(API_KEY);


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
        coords: {}
    };

    componentDidMount() {
        this.loadContractors();
    };

    loadContractors = () => {
        API.getContractors()
            .then(res => {
                console.log("contractor ", res.data)
                this.setState({
                    contractors: res.data,
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
        Geocode.fromAddress(this.state.search).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
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
            <ContractCard />
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
                {this.state.contractors.map(contractor => (
                    <Marker
                        onClick={this.onMarkerClick}
                        name={contractor.location.locationName}
                        title={contractor.firstName + " " + contractor.lastName}
                        position={contractor.location.coords}
                        location={contractor.location.streetNumber + " " +
                            contractor.location.streetName + " " +
                            contractor.location.cityName + " " +
                            contractor.location.state + " " + contractor.location.zipCode}
                        key={contractor._id}
                        contractorID={contractor._id}
                        contractorID={contractor._id}
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
    apiKey: API_KEY
})(TestMap)