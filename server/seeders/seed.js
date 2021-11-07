const db = require('../config/connection');
const { Drink, Money } = require('../models');
const moneySeeds = require('./moneySeed.json');
const drinkSeeds = require('./drinkSeeds.json');

db.once('open', async () => {
  try {
    await Money.deleteOne({});
    await Drink.deleteMany({});

    await Money.create(moneySeeds);
    await Drink.create(drinkSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});