const router = require("express").Router();
const cryptoController = require("../../controllers/cryptoController");

router.route("/").get(cryptoController.findAll);

module.exports = router;
