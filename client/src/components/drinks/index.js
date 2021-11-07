import React from "react";

const Drink = (props) => {
  return (
    <section className="single-drink">
      <img className="drink-img" src={props.image}></img>
      <button
        className="btn"
        onClick={props.handleSellDrink}
        name={props.name}
        value={props.price}
        data-quantity={props.quantity}
        data-img={props.image}>
          {props.name}  £{props.price}
      </button>
    </section>
  );
}

export default Drink;