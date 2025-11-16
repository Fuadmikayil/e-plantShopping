import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";
import "./CartItem.css";

function CartItem({ onContinueShopping }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () =>
    items.reduce((total, item) => {
      const price = parseFloat(item.cost.substring(1));
      return total + price * item.quantity;
    }, 0);

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({ name: item.name, amount: item.quantity + 1 })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ name: item.name, amount: item.quantity - 1 })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  return (
    <div>
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

      <button onClick={onContinueShopping}>Continue Shopping</button>
      <button onClick={() => alert("Checkout not implemented yet")}>
        Checkout
      </button>

      {items.map((item) => (
        <div key={item.name} className="cart-row">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.cost}</p>
          <p>Total: ${parseFloat(item.cost.substring(1)) * item.quantity}</p>

          <button onClick={() => handleDecrement(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleIncrement(item)}>+</button>

          <button onClick={() => handleRemove(item.name)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
