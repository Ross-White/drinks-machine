const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Drink {
    _id: ID
    name: String
    price: Float
    quantity: Int
  }
  type Money {
    _id: ID
    name: String
    value: Float
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    drinks: [Drink]
    money: [Money]
  }

  type Mutation {
    sellDrink(name: String, price: Float, quantity: Int): Drink
    resetDrinks(name: String, price: Float, quantity: Int): Drink
    addMoney(name: String, value: Float): Money
    resetMoney(name: String, value: Float): Money  
  }
`;

module.exports = typeDefs;