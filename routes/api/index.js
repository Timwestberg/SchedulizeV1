const router = require("express").Router();
const bookRoutes = require("./schedulize");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
