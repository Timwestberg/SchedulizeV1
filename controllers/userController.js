const db = require('../models');
const passport = require('passport');
const User = require('../models/User');
// Defining methods for the booksController
module.exports = {
	findAll: function(req, res) {
		//ms 1/29/2019 wouldnt this be Users plural?
		db.User
			.find(req.query)
			// .sort({ date: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findById: function(req, res) {
		db.User.findById(req.params.id).then((dbModel) => res.json(dbModel)).catch((err) => res.status(422).json(err));
	},
	create: function(req, res) {
		console.log(req.body);
		db.User
			.register(new User({ username: req.body.username, name: req.body.name }), req.body.password)
			.then((user) => {
				return res.json({
					redirect: '/',
					status: 'Success',
					message: 'Your credentials are have been inputted into the system'
				});
			})
			.catch((err) => {
				console.log('Error registering user!', err);

				res.status(422).json(err);
			});
	},
	update: function(req, res) {
		db.User
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.User
			.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	auth: function(req, res, next) {
		console.log(req.body);
		passport.authenticate('local', function(err, user, info) {
			if (err) {
				return next(err);
			}
			if (!user) {
				console.log('This user has not been found');
				return res.json({
					redirect: '/',
					status: 'Status 404 no User',
					message: 'Your credentials are incorrect'
				});
			}
			req.logIn(user, function(err) {
				if (err) {
					return next(err);
				}
				return res.json({
					redirect: '/forms',
					status: 'Authorized',
					message: 'Welcome, You have been granted access'
				});
			});
		})(req, res, next);
	}
};
