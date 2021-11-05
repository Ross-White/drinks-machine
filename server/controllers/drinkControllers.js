const { Drink } = require('../models');

const getDrinkController = async (req, res) => {
    console.log(req.body);
    const drink = await Drink.findOne({ name: req.body.name});
    if (!drink) {
        return res.status(400).json({ message: 'Cannot find drink' });
    }
    res.json(drink)
}

const sellDrinkController = async ({ body, params }) => {
    return await db.Drink.findByIdAndUpdate(params.id,{ value : body })
}

module.exports = { sellDrinkController, getDrinkController };