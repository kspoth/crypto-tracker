const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Coin.find(req.query)
      .then((dbCoin) => res.json(dbCoin))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Coin.findById(req.params.id)
      .then((dbCoin) => res.json(dbCoin))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.Coin.create(req.body)
      .then((dbCoin) => res.json(dbCoin))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Coin.findOneAndUpdate({ id: req.params.id }, req.body)
      .then((dbCoin) => res.json(dbCoin))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Coin.findById(req.params.id)
      .then((dbCoin) => dbCoin.remove())
      .then((dbCoin) => res.json(dbCoin))
      .catch((err) => res.status(422).json(err));
  },
};
