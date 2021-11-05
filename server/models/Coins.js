const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coinSchema = new Schema(
  {
    name: {
      type: String,
    },
    value: {
      type: Number,
    },
    quantity: {
      type: Number,
    }
  }
);

const Coin = mongoose.model("Coin", coinSchema);

module.exports = Coin;