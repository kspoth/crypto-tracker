const router = require("express").Router();
const coinController = require("../../controllers/coinController");

router.route("/").get(coinController.findAll).post(coinController.create);

router
  .route("/:id")
  .get(coinController.findById)
  .put(coinController.update)
  .delete(coinController.remove);

module.exports = router;
