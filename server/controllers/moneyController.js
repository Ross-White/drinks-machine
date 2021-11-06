const { Money } = require('../models');

//Increases total valuue of money by the amount spent on drink
const addMoneyController = async (req, res) => {
    //Finds current total value of money
    const total = await Money.findOne({ name: "total" });
    //Increases by added amount
    const updatedTotal = await Money.findOneAndUpdate(
        { name: "total" }, 
        { value: total.value + req.body.value }, 
        { new: true });
    res.json(updatedTotal);
}

//Resets value of money to zero
const resetMoneyController = async (req, res) => {
    const resetMoney = await Money.findOneAndUpdate(
        { name: "total" },
        { value: 0 },
        { new: true });
    res.json(resetMoney);
}

module.exports = { addMoneyController, resetMoneyController};