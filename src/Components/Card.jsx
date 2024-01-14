import React, { useState } from "react";
import error from '../assets/error.jpeg'

function Card(props) {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (event) => {
    const QTY = Number(event.target.value);
    setQuantity(QTY);
  };

  return (
    <div className="card">
      <img className="cardImg" src={props.image}></img>
      <h2 className="cardTitle">{props.item}</h2>
      <p>{props.cost}</p>
      <div className="cardBtnContainer">
        <button
          className="cardBtn"
          onClick={() => props.addToCart(props.item, quantity, props.cost)}
        >
          🛒
        </button>
        <input
          type="number"
          placeholder="1"
          min={1}
          className="cardInput"
          value={quantity}
          onChange={updateQuantity}
        ></input>
      </div>
    </div>
  );
}
Card.defaultProps = {
    cost: "loading cost",
    item: "loading item",
    image: error
}
export default Card;
