import { gql } from '@apollo/client';

export const SELL_DRINK = gql`
    mutation Mutation($name: String) {
        sellDrink(name: $name) {
            _id
            name
            price
            quantity
  }
}
`;

export const RESET_DRINKS = gql`
    mutation Mutation {
        resetDrinks {
            _id
            name
            price
            quantity
    }
}
`;

export const ADD_MONEY = gql`
    mutation Mutation($value: Float) {
        addMoney(value: $value) {
            _id
            name
            value
        }
}
`;

export const RESET_MONEY = gql`
    mutation Mutation {
        resetMoney {
            value
            name
            _id
        }
    }
`;