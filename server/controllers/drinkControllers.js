// const { Drink } = require('../models');

// const getAllDrinksController = async (req, res) => {
//     res.json(await Drink.find());
// }

// //Updates the quantity of selected drink
// const sellDrinkController = async (req, res) => {
//     //Finds existing quantity of selected drink
//     const drink = await Drink.findOne({name: req.body.name});
//     //If quantity is 0, returns 'Sold Out' message
//     if (drink.quantity <= 0 ) {
//         return res.status(400).json({ message: 'Sold Out!' });
//     }
//     //Updates quantity by -1
//     const updatedDrink = await Drink.findOneAndUpdate(
//         { name: req.body.name }, 
//         { quantity: drink.quantity - 1 }, 
//         { new: true });
//     res.json(updatedDrink)
// }

// //Resets all drinks quantities to default (10)
// const resetDrinksController = async (req, res) => {
//     res.json(await Drink.updateMany({ quantity: 10 }, { new: true }));
// }

// module.exports = { getAllDrinksController, sellDrinkController, resetDrinksController };