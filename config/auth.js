module.exports = {
	ensureAuthenticated: function(req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		console.log('You do not have access to see this information, please log in.');
		res.redirect('/');
	}
};
