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

export const RESET = gql`
    mutation Mutation {
        reset {
            _id
            name
            price
            quantity
        }
    }
`;
