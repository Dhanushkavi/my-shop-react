import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const increase = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const decrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart is Empty 🛒</h2>
        <Link to="/home" className="add-cart4">← Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.title} className="item-image" />

          <div className="cart-item-content">
            <h3>{item.title}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>

            <div className="quantity-controls">
              <button onClick={() => decrease(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increase(item)}>+</button>
            </div>

            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <Link to="/checkout" className="checkout-btn">Go to Checkout</Link>
    </div>
  );
};

export default Cart;
