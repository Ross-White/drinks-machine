import React from "react";
import './coins.css';

const Coin = (props) => {
    return (
      <button className="coin">
          <h1>{props.name}</h1>
      </button>
    );
  }
  
  export default Coin;