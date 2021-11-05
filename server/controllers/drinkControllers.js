const { Drink } = require('../models');

const getDrinkController = async (req, res) => {
    console.log(req.body);
    const drink = await Drink.findOne({ name: req.body.name});
    if (!drink) {
        return res.status(400).json({ message: 'Cannot find drink' });
    }
    res.json(drink)
}

const sellDrinkController = async (req, res) => {
    const drink = await Drink.findOne({name: req.body.name});
    const updatedDrink = await Drink.findOneAndUpdate({name: req.body.name}, { quantity: drink.quantity - 1 }, { new: true });
    if (!updatedDrink) {
        return res.status(400).json({ message: 'Cannot find drink' });
    }
    res.json(updatedDrink)
}

const resetDrinksController = async (req, res) => {
    res.json(await Drink.updateMany({ quantity: 10 }, { new: true }));
}

module.exports = { sellDrinkController, getDrinkController, resetDrinksController };