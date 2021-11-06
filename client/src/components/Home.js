import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DRINKS, QUERY_MONEY }  from '../utils/queries';
import { SELL_DRINK, RESET_DRINKS, ADD_MONEY, RESET_MONEY } from '../utils/mutations';

import Coin from './coins';
import Drink from './drinks'
import coins from '../coins.json';


export default function Home() {

    const [moneyAdded, setMoneyAdded] = useState(0);
    const handleMoneyAdded = (event) => {
        const { target } = event;
        const inputValue = parseFloat(moneyAdded) + parseFloat(target.value);
      setMoneyAdded(inputValue.toFixed(2))
    }

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
            <div className="drinksContainer" >
                    {data.drinks.map((drink) => (
                        <Drink name={drink.name} price={drink.price} />
                    ))}
            </div>
            
        </div>
        </div>
    )
}