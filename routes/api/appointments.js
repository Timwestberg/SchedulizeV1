const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");

router.route("/")
  .get(appointmentsController.findAll)
  .post(appoointmentsController.create)
  

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(appointmentsController.findById)
  .put(appointmentsController.update)
  .delete(appointmentsController.remove);

module.exports = router;
