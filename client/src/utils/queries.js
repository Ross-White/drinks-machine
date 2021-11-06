import { gql } from '@apollo/client';

export const QUERY_DRINKS = gql`
    query getDrinks {
        drinks {
            _id
            name
            price
            quantity
        }
    }
`;

export const QUERY_MONEY = gql`
    query Query {
        money {
            _id
            name
            value
        }
    }
`;