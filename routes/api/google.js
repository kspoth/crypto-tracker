const router = require("express").Router();
const googleController = require("../../controllers/cryptoController");

router.route("/").get(googleController.findAll);

module.exports = router;
