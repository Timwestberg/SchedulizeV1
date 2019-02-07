const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const securityRoutes = require('./auth');

router.use('/auth', securityRoutes);

router.use('/api', (req, res) => {
	console.log('Protected Route');
	if (req.isAuthenticated()) {
		apiRoutes;
		console.log('User was Authenticated');
	} else {
		console.log('User is not authenticated!');
		res.redirect('/');
	}
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
