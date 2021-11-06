const { Drink, Money } = require('../models');

const resolvers ={
    Query: {
        drinks: async () => {
            return await Drink.find({});
        },
        money: async () => {
            return await Money.find({});
        }
    },

    Mutation: {
    //Updates the quantity of selected drink
        sellDrink: async (parent, { name, price }) => {
        //Finds existing quantity of selected drink
        const drink = await Drink.findOne({name: name});
        //If quantity is 0, returns 'Sold Out' message
        // if (drink.quantity <= 0 ) {
        //     return res.status(400).json({ message: 'Sold Out!' });
        // }
        //Updates quantity by -1
        const updatedDrink = await Drink.findOneAndUpdate(
            { name: name }, 
            { quantity: drink.quantity - 1 }, 
            { new: true });
        //Finds current total value of money
        const total = await Money.findOne({ name: "total" });
        //Increases by added amount
        const updatedTotal = await Money.findOneAndUpdate(
            { name: "total" }, 
            { value: total.value + price }, 
            { new: true });
        return updatedTotal, updatedDrink;
        },

        //Resets all drinks quantities to default (10)
        resetDrinks: async (parent, args) => {
            return await Drink.updateMany({ 
                quantity: 10 }, 
                { new: true });
        },

        // //Increases total valuue of money by the amount spent on drink
        // addMoney: async (parent, { value }) => {
        //     //Finds current total value of money
        //     const total = await Money.findOne({ name: "total" });
        //     //Increases by added amount
        //     const updatedTotal = await Money.findOneAndUpdate(
        //         { name: "total" }, 
        //         { value: total.value + value }, 
        //         { new: true });
        //     return updatedTotal;
        // },

        //Resets value of money to zero
        resetMoney: async () => {
            const resetMoney = await Money.findOneAndUpdate(
                { name: "total" },
                { value: 0 },
                { new: true });
            return resetMoney;
        }
    }
}

module.exports = resolvers;