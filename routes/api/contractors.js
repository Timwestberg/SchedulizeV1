const router = require("express").Router();
const contractorsController = require("../../controllers/contractorController");

router.route("/")
  .get(contractorsController.findAll)
  .post(contractorsController.create)
  

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(contractorsController.findById)
  .put(contractorsController.update)
  .delete(contractorssController.remove);

module.exports = router;
