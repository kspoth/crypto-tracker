const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cryptoSchema = new Schema({
  key: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String },
  symbol: { type: [String], required: true },
  marketCap: { type: String, required: true },
  volume: { type: String, required: true },
  image: { type: String, required: true },
  priceChange: { type: String, required: true, unique: true },
});

const crypto = mongoose.model("crypto", cryptoSchema);

module.exports = crypto;
