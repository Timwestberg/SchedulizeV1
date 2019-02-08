const router = require("express").Router();
const contractorsController = require("../../controllers/contractorController");

router.route("/")
  .get(contractorsController.findAll)
  .post(contractorsController.create)
  
  router
  .route("/params")
  .get(contractorsController.findByParams)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(contractorsController.findById)
  .put(contractorsController.update)
  .delete(contractorsController.remove);

module.exports = router;
