// // src/pages/Checkout.jsx
// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";

// const Checkout = () => {
//   const { cartItems } = useCart();

//   const totalAmount = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="checkout">
//       <h2>Checkout</h2>
//       <p>Total Amount: ₹{totalAmount}</p>
//       <button className="add-cart2" onClick={() => alert("Order placed successfully!")}>Place Order</button>
//       <br />
//       <br />
//       <Link to="/" className="add-cart3">← Back to Cart</Link>
//       <br />
//       <Link to="/" className="add-cart4">← Back to Home</Link>
//     </div>
//   );
// };

// export default Checkout;
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false); // local alert state

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    setOrderPlaced(true); // Show the message
    setTimeout(() => {
      setOrderPlaced(false); // Hide after 3 seconds
    }, 3000);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Total Amount: ₹{totalAmount}</p>

      {orderPlaced && (
        <div className="custom-alert">
          ✅ Order placed successfully!
        </div>
      )}

      <button className="add-cart2" onClick={handlePlaceOrder}>
        Place Order
      </button>
      <Link to="/cart" className="add-cart3">← Back to Cart</Link>
      <Link to="/home" className="add-cart4">← Back to Home</Link>
    </div>
  );
};

export default Checkout;
