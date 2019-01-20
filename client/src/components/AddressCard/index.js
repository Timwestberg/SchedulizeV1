import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import "./style.css";

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});


class AddressCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render(props) {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    title={props.name}
                />
                <CardContent>
                    <Typography component="p">
                        <ul>
                            <li>
                                <strong>Phone:</strong> {props.phone}
                            </li>
                            <li>
                                <strong>Email:</strong> {props.email}
                            </li>
                        </ul>
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <h3>Contact Person</h3>
                        <ul>
                            <li>
                                <p>Name:</p> {props.contactName}
                            </li>
                            <li>
                                <p>Phone:</p> {props.contactPhone}
                            </li>
                            <li>
                                <p>Email:</p> {props.contactEmail}
                            </li>
                            <li>
                                <p>Position:</p> {props.contactPosition}
                            </li>
                        </ul>
                        <h3>Billing Information</h3>
                        <ul>
                            <li>
                                {/* same as contact information above ?*/}
                                <p>Name:</p> {props.ctName}
                            </li>
                            <li>
                                <p>Phone:</p> {props.ctPhone}
                            </li>
                            <li>
                                <p>Email:</p> {props.ctEmail}
                            </li>
                            <li>
                                <p>Position:</p> {props.ctPosition}
                            </li>
                        </ul>
                        <h4>Location:</h4>
                        <ul>
                            <li>
                                <p>Location Name:</p> {props.locationName}
                            </li>
                            <li>
                                <p>Street Number:</p> {props.streetNumber}
                            </li>
                            <li>
                                <p>Street Name:</p> {props.streetName}
                            </li>
                            <li>
                                <p>City Name:</p> {props.cityName}
                            </li>
                            <li>
                                <p>State:</p> {props.state}
                            </li>
                            <li>
                                <p>Zip Code:</p> {props.zipCode}
                            </li>
                        </ul>
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

AddressCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddressCard);









// function AddressCard(props) {
//     return (
//         <div className="card">
//         <div className="content">
//         <h4>{props.name}</h4>
//             <ul>
//                 <li>
//                     <strong>Phone:</strong> {props.phone}
//                 </li>
//                 <li>
//                     <strong>Email:</strong> {props.email}
//                 </li>
//             </ul>
//             <h3>Contact Person</h3>
//             <ul>
//                 <li>
//                     <p>Name:</p> {props.contactName}
//                 </li>
//                 <li>
//                     <p>Phone:</p> {props.contactPhone}
//                 </li>
//                 <li>
//                     <p>Email:</p> {props.contactEmail}
//                 </li>
//                 <li>
//                     <p>Position:</p> {props.contactPosition}
//                 </li>
//             </ul>
//             <h3>Billing Information</h3>
//             <ul>
//                 <li>
//                     {/* same as contact information above ?*/}
//                     <p>Name:</p> {props.ctName}
//                 </li>
//                 <li>
//                     <p>Phone:</p> {props.ctPhone}
//                 </li>
//                 <li>
//                     <p>Email:</p> {props.ctEmail}
//                 </li>
//                 <li>
//                     <p>Position:</p> {props.ctPosition}
//                 </li>
//             </ul>
//             <h4>Location:</h4>
//             <ul>
//                 <li>
//                     <p>Location Name:</p> {props.locationName}
//                 </li>
//                 <li>
//                     <p>Street Number:</p> {props.streetNumber}
//                 </li>
//                 <li>
//                     <p>Street Name:</p> {props.streetName}
//                 </li>
//                 <li>
//                     <p>City Name:</p> {props.cityName}
//                 </li>
//                 <li>
//                     <p>State:</p> {props.state}
//                 </li>
//                 <li>
//                     <p>Zip Code:</p> {props.zipCode}
//                 </li>
//             </ul>
//             </div>
//             <span onClick={() => props.removeClient(props.id)} className="remove">
//               𝘅
//             </span>
//         </div>
//     )
// }

// export default AddressCard;