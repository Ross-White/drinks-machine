const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const drinkSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
      min: [ 0, 'Sold Out']
    } 
  }
);

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;