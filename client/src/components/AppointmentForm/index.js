import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, CardActions, IconButton, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { red } from '@material-ui/core/colors';
import { Favorite, Share, ExpandMore } from '@material-ui/icons';

const styles = (theme) => ({
	card: {
		maxWidth: 400
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	actions: {
		display: 'flex'
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	}
});

class RecipeReviewCard extends React.Component {
	state = { expanded: false };

	handleExpandClick = () => {
		this.setState((state) => ({ expanded: !state.expanded }));
	};

	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.card}>
				<CardHeader title='New Assignment' subheader='Current Date/Time' />
				<CardContent>
					<Typography component='p'>
						This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
						cup of frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions className={classes.actions} disableActionSpacing>
					<IconButton aria-label='Add to favorites'>
						<Favorite />
					</IconButton>
					<IconButton aria-label='Share'>
						<Share />
					</IconButton>
					<IconButton
						className={classnames(classes.expand, {
							[classes.expandOpen]: this.state.expanded
						})}
						onClick={this.handleExpandClick}
						aria-expanded={this.state.expanded}
						aria-label='Show more'>
						<ExpandMore />
					</IconButton>
				</CardActions>
			</Card>
		);
	}
}

RecipeReviewCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
