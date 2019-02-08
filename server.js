const express = require('express');
const morgan = require('morgan')('combined');
const bodyParser = require('body-parser');
const routes = require('./routes');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const User = require('./models/User');

// Connect mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/schedulizeDB', function(err) {
	if (err) {
		console.log('Could not connect to mongodb on localhost');
	}
});

const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use(morgan);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: 'badCookie', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());
// Add routes, both API and view
app.use(routes);

app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
