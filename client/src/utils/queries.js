import { gql } from '@apollo/client';

export const QUERY_DRINKS = gql`
    query getDrinks {
        drinks {
            _id
            name
            price
            quantity
            image
        }
    },
`;

export const QUERY_MONEY = gql`
    query getMoney {
        money {
            name
            value
        }
    }
`;
