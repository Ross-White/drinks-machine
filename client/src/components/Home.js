//Importing the required modules
import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_DRINKS } from '../utils/queries';
import { SELL_DRINK, RESET } from '../utils/mutations';

import Coin from './coins';
import Drink from './drinks'
import coins from '../coins.json';

export default function Home() {
    //Setting the state of diplayed elements
    const [moneyAdded, setMoneyAdded] = useState(0);
    const [change, setChange] = useState(0);
    const [purchasedDrink, setPurchasedDrink] = useState('');
    const [purchasedDrinkImg, setPurchasedDrinkImg] = useState('');

    //Declring the mutations to be used in functions
    const [sellDrink] = useMutation(SELL_DRINK);
    const [reset] = useMutation(RESET);

    //Updates the state of the money that's been inserted
    const handleMoneyAdded = (event) => {
        const { target } = event;
        //Adds together value of money already added and the value of coin inserted
        const inputValue = parseFloat(moneyAdded) + parseFloat(target.value);
        //Updates state
        setMoneyAdded(inputValue.toFixed(2))
    };

    //Sell drink function
    const handleSellDrink = (event) => {
        const { target } = event;
        const quantity = target.getAttribute('data-quantity');
        const image = target.getAttribute('data-img');
        //Validates that the money inserted is enough to pay for selected drink
        if (moneyAdded < target.value) {
            alert('Not enough money!')
        //Validates that quantity of selected drink is greater than 0
        } else if (quantity <= 0 ) {
            alert('This Item is Sold Out!')
        }
        else {
            //Calls see drink mutation
            sellDrink({
                variables: {
                    "name": target.name,
                    "price": parseFloat(target.value)
                }
            })
            //Updates state of displayed elements
            setPurchasedDrink(target.name);
            setPurchasedDrinkImg(image);
            setChange(parseFloat((moneyAdded) - parseFloat(target.value)).toFixed(2));
            setMoneyAdded(0);
        }
    };

    //Resets state of money inserted to 0, and adds the value to the change
    const handleCancel =() => {
        setChange((parseFloat(moneyAdded) + parseFloat(change)).toFixed(2));
        setMoneyAdded(0);
    };

    //Resets state of the elements to empty
    const handleTakeProducts = () => {
        setPurchasedDrink('');
        setPurchasedDrinkImg('');
        setChange(0);
    }

    //Calls reset mutation, resets db to default settings
    const handleReset = () => {
        reset(alert('Drinks stocks and taking reset!'))
        window.location.reload();
    }

    //Calls QUERY_DRINKS, provides data for rendering the drinks components
    const { loading, data } = useQuery(QUERY_DRINKS);
    if (loading) {
        return <div>Loading...</div>;
    } else if (!data) {
        return 'No Data Available!'
    }

    return (
        <div className="main">
            <h1>Drink Machine</h1>
            <div>
                <h2>Click on a coin to insert</h2>
                <div className="coin-container">
                    {coins.coins.map((coins) => (
                        <Coin handleMoneyAdded={handleMoneyAdded} name={coins.name} value={coins.value} />
                    ))}
                </div>
                <div>
                    <h2>Total Money Inserted</h2>
                    <h3>£{moneyAdded}</h3>
                    <button className="btn" onClick={handleCancel}>Cancel</button>
                </div>
                <div className="drink-container">
                    {data.drinks.map((drink) => (
                        <Drink handleSellDrink={handleSellDrink} name={drink.name} price={drink.price} quantity={drink.quantity} image={drink.image}/>
                    ))}
                </div>
                <section className="misc">
                    <div className="change-and-drink">
                        <h1>Your Purchased Drink and Change</h1>
                        <img src={purchasedDrinkImg} />
                        <h2>{purchasedDrink}</h2>
                        <h2>£{change}</h2>
                        <button className="btn" onClick={handleTakeProducts}>
                            Click to take your drink and change
                        </button>
                    </div>
                    <div className="reset">
                        <button className="reset-btn" onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}