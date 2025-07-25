import { useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false); // 👈 New state
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ ...product, quantity });
    setShowAlert(true); // 👈 Show the alert message

    // Hide after 2 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>

      <div className="quantity-control">
        <button className="add-cart1" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
        <span>{quantity}</span>
        <button className="add-cart1" onClick={() => setQuantity((q) => q + 1)}>+</button>
      </div>

      <button onClick={handleAdd} className="add-cart">Add to Cart</button>

      {/* ✅ Alert Message Below the Button */}
      {showAlert && <p className="add-alert">✅ Added to cart!</p>}
    </div>
  );
};

export default ProductCard;
