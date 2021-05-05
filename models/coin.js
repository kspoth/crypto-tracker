const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoinSchema = new Schema({
  key: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number },
  symbol: { type: String, required: true },
  market_cap: { type: Number, required: true },
  volume: { type: Number, required: true },
  image: { type: String, required: true },
  priceChange: { type: Number, required: true },
});

const Coin = mongoose.model("Coin", CoinSchema);

module.exports = Coin;
