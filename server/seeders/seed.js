const db = require('../config/connection');
const { Coin, Drink } = require('../models');
const coinSeeds = require('./coinSeeds.json');
const drinkSeeds = require('./drinkSeeds');

db.once('open', async () => {
  try {
    await Coin.deleteMany({});
    await Drink.deleteMany({});

    await Coin.create(coinSeeds);
    await Drink.create(drinkSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});