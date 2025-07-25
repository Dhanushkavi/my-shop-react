// src/components/CartItem.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="item-image" />
      <div className="item-details">
        <h4>{item.title}</h4>
        <p>Price: ₹{item.price}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>−</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p>Total: ₹{item.price * item.quantity}</p>
      </div>
      <button className="remove-btn" onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
