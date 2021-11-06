import React from "react";
import './drink.css';

const Drink = (props) => {
    return (
      <button 
      className="drink" 
      onClick={props.handleSellDrink}
      name={props.name}
      value={props.price}
      >
        {props.name}
        {props.price}
      </button>
    );
  }
  
  export default Drink;