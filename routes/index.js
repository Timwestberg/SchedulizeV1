const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const securityRoutes = require('./auth');
const { ensureAuthenticated } = require('../config/auth');
router.use('/auth', securityRoutes);

// This ensures that every time the api server is hit the user will be check for access rights.
router.use('/api', ensureAuthenticated, apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
