const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moneySchema = new Schema(
  {
    value: {
      type: Number,
    }
  }
);

const Money = mongoose.model("Money", moneySchema);

module.exports = Money;