const router = require("express").Router();
const clientRoutes = require("./schedulize");
const apptRoutes = require("./schedulize")
const contractorRoutes = require("./schedulize");

// Book routes
router.use("/clients", clientRoutes);
router.use("/appointments", apptRoutes);
router.use("/contractors", contractorRoutes);

module.exports = router;
