import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import Checkout from "../Checkout/Checkout";
import CurrencyFormat from "react-currency-format";
import "./Cart.css";

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();
  const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="cart">
      <div className="cart__items">
        {cart.map((item, index) => (
          <Checkout
            key={index}
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <div className="cart__summary">
        <h4 className="summary__title">Cart Summary</h4>
        <CurrencyFormat
          renderText={(value) => (
            <div className="summary__price">
              <span style={{ fontWeight: "bold" }}>
                TOTAL: ({cart.length} items)
              </span>
              <span>{value}</span>
            </div>
          )}
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button className="summary__checkoutBtn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
