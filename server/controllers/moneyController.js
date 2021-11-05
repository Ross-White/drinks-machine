const { Money } = require('../models');

const addMoneyController = async (req, res) => {
    const total = await Money.findOne({ name: "total" });
    const updatedTotal = await Money.findOneAndUpdate(
        { name: "total" }, 
        { value: total.value + req.body.value }, 
        { new: true });
    res.json(updatedTotal);
}

module.exports = addMoneyController;