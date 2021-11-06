import { gql } from '@apollo/client';

export const SELL_DRINK = gql`
    mutation Mutation($name: String, $price: Float) {
        sellDrink(name: $name, price: $price) {
            name
            price
            quantity
            _id
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

export const RESET_MONEY = gql`
    mutation Mutation {
        resetMoney {
            value
            name
            _id
        }
    }
`;