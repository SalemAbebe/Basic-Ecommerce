import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import "./Checkout.css";
import { RiDeleteBin5Line } from "react-icons/ri";
const Checkout = ({ id, image, title, price, description }) => {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__description">{description} </p>
        <p className="checkoutProduct__price">
          <small style={{ fontWeight: "bold" }}>$</small>
          <strong>{price}</strong>
        </p>

        <button className="deleteItemBtn" onClick={removeFromCart}>
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
};

export default Checkout;
