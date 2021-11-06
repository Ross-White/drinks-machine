import React, { useState } from 'react';
// import { getAllDrinks, sellDrink, resetDrinks, addMoney, resetMoney } from '../api';
import { useQuery } from '@apollo/client';
import { QUERY_DRINKS, QUERY_MONEY }  from '../utils/queries';

import Coin from './coins';
import Drink from './drinks'
import coins from '../coins.json';


export default function Home() {

    const { data } = useQuery(QUERY_DRINKS);
    const drinks = data.drinks;
    console.log('DRINKS::', data.drinks);

    return (
        <div>
        <h1>Drink Machine</h1>
        <div>
            <h1>Insert Coins</h1>
            <div className="coin-container">
                {coins.coins.map((coins) => (
                    <Coin name={coins.name} value={coins.value} />
                ))}
            </div>
            <div className="drinksContainer" >
                    {drinks.map((drink) => (
                        <Drink name={drink.name} price={drink.price} />
                    ))}
            </div>
            
        </div>
        </div>
    )
}