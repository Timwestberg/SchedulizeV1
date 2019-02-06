const router = require("express").Router();
const clientsController = require("../../controllers/clientsController");
// const contractorsController = require("../../controllers/contractorController");
// const appointmentsController = require("../../controllers/appointmentsController");


// Matches with "/api/books"
router.route("/")
  .get(clientsController.findAll)
  .post(clientsController.create)

  router
  .route("/Params")
  .get(clientsController.findByParams)

  
// Matches with "/api/books/:id"
router
<<<<<<< HEAD
  .route("/one/:id")
=======
  .route("/:_id")
>>>>>>> 7492d9dfd5cdd6f420d971c328abae41254e0edf
  .get(clientsController.findById)
  .put(clientsController.update)
  .delete(clientsController.remove);

module.exports = router;