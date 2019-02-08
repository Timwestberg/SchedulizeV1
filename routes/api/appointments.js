const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");

router.route("/")
  .get(appointmentsController.findAll)
  .post(appointmentsController.create)
  
  router
  .route("/params")
  .get(appointmentsController.findByParams)

// Matches with "/api/books/:id"
router
  .route("/one/:id")
  .get(appointmentsController.findById)
  .put(appointmentsController.update)
  .delete(appointmentsController.remove);

module.exports = router;
