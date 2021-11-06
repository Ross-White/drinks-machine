import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_DRINKS, QUERY_MONEY } from '../utils/queries';
import { SELL_DRINK, RESET_DRINKS, RESET_MONEY } from '../utils/mutations';

import Coin from './coins';
import Drink from './drinks'
import coins from '../coins.json';


export default function Home() {

    const [moneyAdded, setMoneyAdded] = useState(0);
    const [change, setChange] = useState(0);
    const [purchasedDrink, setPurchasedDrink] = useState('');
    const [sellDrink] = useMutation(SELL_DRINK);

    const handleMoneyAdded = (event) => {
        const { target } = event;
        const inputValue = parseFloat(moneyAdded) + parseFloat(target.value);
        setMoneyAdded(inputValue.toFixed(2))
    };

    const handleSellDrink = (event) => {
        const { target } = event;
        sellDrink({
            variables: {
                "name": target.name,
                "price": parseFloat(target.value)
            }
        });
        setPurchasedDrink(target.name);
        setChange(parseFloat(moneyAdded) - parseFloat(target.value));
        setMoneyAdded(0);
    };

    const { loading, data } = useQuery(QUERY_DRINKS);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Drink Machine</h1>
            <div>
                <h1>Insert Coins</h1>
                <div className="coin-container">
                    {coins.coins.map((coins) => (
                        <Coin handleMoneyAdded={handleMoneyAdded} name={coins.name} value={coins.value} />
                    ))}
                </div>
                <div>
                    <p>Total Added</p>
                    <p>{moneyAdded}</p>
                </div>
                <div className="drinksContainer">
                    {data.drinks.map((drink) => (
                        <Drink handleSellDrink={handleSellDrink} name={drink.name} price={drink.price} />
                    ))}
                </div>
                <div>
                    <h1>{purchasedDrink}</h1>
                    <h2>{change}</h2>
                </div>

            </div>
        </div>
    )
}