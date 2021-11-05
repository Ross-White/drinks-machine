const { Drink } = require('../models');

const getDrinkController = async (req, res) => {
    console.log(req.body);
    const drink = await Drink.findOne({ name: req.body.name});
    if (drink.quantity === 0 ) {
        return res.status(400).json({ message: 'Sold Out!' });
    }
    res.json(drink)
}

const sellDrinkController = async (req, res) => {
    const drink = await Drink.findOne({name: req.body.name});
    if (drink.quantity <= 0 ) {
        return res.status(400).json({ message: 'Sold Out!' });
    }
    const updatedDrink = await Drink.findOneAndUpdate(
        {name: req.body.name}, 
        { quantity: drink.quantity - 1 }, 
        { new: true });
    res.json(updatedDrink)
}

const resetDrinksController = async (req, res) => {
    res.json(await Drink.updateMany({ quantity: 10 }, { new: true }));
}

module.exports = { sellDrinkController, getDrinkController, resetDrinksController };