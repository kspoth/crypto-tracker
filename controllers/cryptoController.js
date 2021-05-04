const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    const { query: params } = req;
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        {
          params,
        }
      )
      .then((results) =>
        results.data.items.filter(
          (result) =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then((apiCoins) =>
        db.Book.find().then((dbCoins) =>
          apiBooks.filter((apiCoin) =>
            dbBooks.every((dbCoin) => dbBook.googleId.toString() !== apiCoin.id)
          )
        )
      )
      .then((coins) => res.json(coins))
      .catch((err) => res.status(422).json(err));
  },
};
