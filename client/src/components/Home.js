import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_DRINKS } from '../utils/queries';
import { SELL_DRINK, RESET } from '../utils/mutations';

import Coin from './coins';
import Drink from './drinks'
import coins from '../coins.json';

export default function Home() {

    const [moneyAdded, setMoneyAdded] = useState(0);
    const [change, setChange] = useState(0);
    const [purchasedDrink, setPurchasedDrink] = useState('');
    const [sellDrink] = useMutation(SELL_DRINK);
    const [reset] = useMutation(RESET);

    const handleMoneyAdded = (event) => {
        const { target } = event;
        const inputValue = parseFloat(moneyAdded) + parseFloat(target.value);
        setMoneyAdded(inputValue.toFixed(2))
    };

    const handleSellDrink = (event) => {
        const { target } = event;
        const quantity = target.getAttribute('data-quantity');
        if (moneyAdded < target.value) {
            alert('Not enough money!')
        } else if (quantity <= 0 ) {
            alert('This Item is Sold Out!')
        }
        else {
            sellDrink({
                variables: {
                    "name": target.name,
                    "price": parseFloat(target.value)
                }
            });
            setPurchasedDrink(target.name);
            setChange(parseFloat((moneyAdded) - parseFloat(target.value)).toFixed(2));
            setMoneyAdded(0);
        }
    };

    const handleCancel =() => {
        setChange(parseFloat(moneyAdded) + parseFloat(change));
        setMoneyAdded(0);
    };

    const handleTakeProducts = () => {
        setPurchasedDrink('');
        setChange(0);
    }

    const handleReset = () => {
        reset(
            alert('Drinks stocks and taking reset!')
        )
    }
    const { loading, data } = useQuery(QUERY_DRINKS);
    console.log(data)
    if (loading) {
        return <div>Loading...</div>;
    } else if (!data) {
        return 'This Sucks'
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
                    <button onClick={handleCancel}>Cancel</button>
                </div>
                <div className="drinksContainer">
                    {data.drinks.map((drink) => (
                        <Drink handleSellDrink={handleSellDrink} name={drink.name} price={drink.price} quantity={drink.quantity}/>
                    ))}
                </div>
                <div>
                    <h1>{purchasedDrink}</h1>
                    <h2>{change}</h2>
                    <button onClick={handleTakeProducts}>
                        Click to take your drink and change
                    </button>
                </div>
                <div>
                    <button onClick={handleReset}>
                        Reset
                    </button>
                </div>

            </div>
        </div>
    )
}