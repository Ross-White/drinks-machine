import React from "react";

const Drink = (props) => {
    return (
      <button className="drink">
          <h1>{props.name}</h1>
          <h2>{props.price}</h2>
      </button>
    );
  }
  
  export default Drink;