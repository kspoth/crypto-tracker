const path = require("path");
const router = require("express").Router();
const coinRoutes = require("./coins");
const cryptoRoutes = require("./crypto");

router.use("/coins", coinRoutes);

router.use("/crypto", cryptoRoutes);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
