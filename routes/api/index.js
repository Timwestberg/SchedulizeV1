const router = require("express").Router();
const clientRoutes = require("./clients");
const contractorRoutes = require("./contractors");
// const apptRoutes = require("./schedulize")

// Book routes
router.use("/clients", clientRoutes);
router.use("/appointments", apptRoutes);
router.use("/contractors", contractorRoutes);

module.exports = router;
