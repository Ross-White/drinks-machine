const { ApolloError } = require('apollo-server-errors');
const { Drink, Money } = require('../models');

const resolvers = {
    Query: {
        //returns all drinks
        drinks: async () => {
            return await Drink.find({});
        },
        //returns money data
        money: async () => {
            return await Money.find({});
        }
    },

    Mutation: {
        //Updates the quantity of selected drink
        sellDrink: async (parent, { name, price }) => {
            //Finds existing quantity of selected drink
            const drink = await Drink.findOne({ name: name });
            //If quantity is 0, returns 'Sold Out' message
            if (drink.quantity <= 0) {
                return new ApolloError('Sold Out');
            } else {
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
            }
        },

        //Resets all drinks quantities to default (10) and takings to zero
        reset: async ( parent, args ) => {
            const resetDrinks = await Drink.updateMany(
                {},
                {
                quantity: 10
                },
                { new: true });
            const resetMoney = await Money.findOneAndUpdate(
                { name: "total" },
                { value: 0 },
                { new: true });
            return resetMoney, resetDrinks;
        }
    },

}

module.exports = resolvers;